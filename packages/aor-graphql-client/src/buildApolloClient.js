import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();

export default options => {
    if (!options) {
        return new ApolloClient();
    }

    const { uri, ...otherOptions } = options;

    if (uri) {

        const httpLink = createHttpLink({
            uri: uri,
          });

        return new ApolloClient({
            ...otherOptions,
            link: httpLink,
            cache: cache
        });
    }

    return new ApolloClient(options);
};
