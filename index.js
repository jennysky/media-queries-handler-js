class MediaQueriesHandler {
    #nodes = null;

    #queries = null;

    #style = null;

    #queryToMedia = null;

    addQueries(nodes, queries, style) {

        if (!nodes || nodes.length === 0) {
        throw Error('invalid #nodes');
        }
        if (!queries) {
            throw Error('invalid queries');
        }

        if (this.#queryToMedia) {
            this.removeQueries();
        }

        this.#nodes = nodes;
        this.#queries = queries;

        const queryToMedia = Object.keys(queries).reduce((acc, curr) => {
            acc[curr] = {
                media: window.matchMedia(curr),
            };
            acc[curr].media.addEventListener('change', this.#handleEvent.bind(this));
            return acc;
        }, {});
        this.#queryToMedia = queryToMedia;

        if (style) {
            this.#style = style;
            this.#applyStyles(style);
        }

        this.#handleEvent();
    }

	#handleEvent() {
        for (const queryStr in this.#queryToMedia) {
            const value = this.#queryToMedia[queryStr];
            if (value.media.matches) {
                const style = this.#queries[queryStr];
                this.#applyStyles(style);
            }
        }
    }

	#applyStyles(style) {
        this.#nodes.forEach((item) => {
            for (const propKey in style) {
                const propVal = style[propKey];
                item.style[propKey] = propVal;
            }
        });
    }

	#removeStyles(style) {
        this.#nodes.forEach((item) => {
            for (const propKey in style) {
                item.style[propKey] = null;
            }
        });
    }

	#resetStyles(defaultStyles) {
        if (this.#style) {
            this.#removeStyles(this.#style);
        }
        if (defaultStyles) {
            this.#applyStyles(defaultStyles);
        }
    }

	removeQueries(defaultStyles) {
        if (!this.#queryToMedia) {
            return;
        }
        let styleToRemove = {};
        for (const queryStr in this.#queryToMedia) {
            const value = this.#queryToMedia[queryStr];
            value.media.removeEventListener('change', this.#handleEvent);
            styleToRemove = { ...styleToRemove, ...this.#queries[queryStr] };
        }

            this.#removeStyles(styleToRemove);

            this.#resetStyles(defaultStyles);

            this.#nodes = null;
        this.#queries = null;
        this.#queryToMedia = null;
        this.#style = null;
    }

    hasQueries() {
        return !!this.#queryToMedia;
    }
}
