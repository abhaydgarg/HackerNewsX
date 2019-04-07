import { isObject, isEmpty } from '@abhaydgarg/is';
import { item, topstories, newstories, beststories } from 'hacker-news-api-consumer';
import axios from 'axios';
import url from 'url';
import extractor from 'unfluff';

import Util from './Util';
import { idsFixture, storiesFixture, metadataFixture } from '../fixtures';

const fixture = false;
const sessionStorage = typeof window.sessionStorage === 'undefined' ? undefined : window.sessionStorage;
const hackerNewsXStoryKey = 'hackerNewsXStoryKey';
const ycombinatorUrl = 'https://news.ycombinator.com/';
const corsFreeUrl = 'https://cors-anywhere.herokuapp.com/';

export async function getStories (type) {
  let fn = null;
  if (type === 'new') {
    fn = newstories;
  } else if (type === 'top') {
    fn = topstories;
  } else if (type === 'best') {
    fn = beststories;
  } else {
    throw new Error('Type mismatch');
  }

  if (fixture === true) {
    return idsFixture;
  }

  let xIds = [];
  const response = await fn();
  // Error object of type Object is returned from
  // hacker-news-api-consumer module.
  if (response.error !== undefined) {
    throw new Error(response.error);
  }
  xIds = response.data.slice(0, 10);
  return xIds;
}

export async function getStory (id) {
  if (fixture === true) {
    return mapper(storiesFixture[id]);
  }

  const response = await item(id);
  if (response.error !== undefined) {
    throw new Error(response.error);
  }
  return mapper(response.data);
}

export async function getMetadata (id, url) {
  // First try to get metadata from storage.
  let metadata = getMetadataFromStorage(id);
  if (isObject(metadata)) {
    return metadata;
  }

  if (fixture === true) {
    return metadataFixture;
  }

  try {
    const response = await axios.get(`${corsFreeUrl}${url}`, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    });
    let data = extractor.lazy(response.data);
    let metadata = {
      description: data.description(),
      image: data.image()
    };
    addMetadata(id, metadata);
    return metadata;
  } catch (e) {
    // Do not stop, if metadata is failed to fetch.
    Util.consoleWarn(`Cannot fetch metadata [${url}]`);
    return null;
  }
}

function getMetadataFromStorage (id) {
  if (sessionStorage !== undefined) {
    // null is returned if key does not exist
    let metadata = sessionStorage.getItem(`${hackerNewsXStoryKey}${id}`);
    if (metadata !== null) {
      try {
        // Try/catch block because local storage
        // can manipulated by other sources and
        // you may not get what you are expecting
        // so if JSON parsing is failed, storage is not
        // object, if storage is object then metadata key
        // is missing and metadata is present but it is not object.
        // So instead deeply check the type and key of storage variable
        // using multiple if statements, it is better to use try/catch
        // which catch any type of error.
        return JSON.parse(metadata);
      } catch (e) {
        Util.consoleWarn(`Cannot get metadata from storage [${id}]`);
      }
    }
  }
}

function addMetadata (id, metadata) {
  if (sessionStorage === undefined) {
    return;
  }
  try {
    sessionStorage.setItem(`${hackerNewsXStoryKey}${id}`, JSON.stringify(metadata));
  } catch (e) {
    Util.consoleWarn(`Cannot add metadata to storage [${id}]`);
  }
}

function mapper (object) {
  // Initial values when url
  // is not present in story;
  // story can be ask or show.
  let story = {
    id: object.id,
    title: object.title,
    image: null,
    description: object.text,
    url: `${ycombinatorUrl}item?id=${object.id}`,
    website: 'news.ycombinator',
    time: object.time * 1000,
    points: object.score,
    comments: object.descendants,
    commentUrl: `${ycombinatorUrl}item?id=${object.id}`,
    canFetchMetadata: false
  };

  if (!isEmpty(object.url)) {
    story.description = null;
    story.url = object.url;
    story.website = url.parse(object.url).hostname;
    story.canFetchMetadata = true;
  }
  return story;
}
