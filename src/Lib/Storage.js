import Config from '../Config';
import Util from './Util';

const sessionStorage = typeof window.sessionStorage === 'undefined' ? undefined : window.sessionStorage;

export function getMetadataFromStorage (id) {
  if (sessionStorage !== undefined) {
    // null is returned if key does not exist
    let metadata = sessionStorage.getItem(`${Config.storyStorageKey}${id}`);
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

export function addMetadata (id, metadata) {
  if (sessionStorage === undefined) {
    return;
  }
  try {
    sessionStorage.setItem(`${Config.storyStorageKey}${id}`, JSON.stringify(metadata));
  } catch (e) {
    Util.consoleWarn(`Cannot add metadata to storage [${id}]`);
  }
}
