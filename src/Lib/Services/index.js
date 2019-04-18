import Config from '../../Config';
import * as Services from './Services';
import * as FixtureServices from './FixtureServices';

const { getStories, getStory, getMetadata } = Config.fixture === true ? FixtureServices : Services;

export { getStories, getStory, getMetadata };
