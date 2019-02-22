// export * from 'starter-lib/src/vuex/state.helper';

/**
 * Action creator factory for simple operation
 */

export function createSimpleOperation(module, name) {
  const TYPE = `${module}/${name}`;

  return {
    module,

    name,

    TYPE,

    action(payload = {}) {
      return {
        type: TYPE,
        ...payload,
      };
    },
  };
}

/**
 * Action creators factory for typical async operation
 */

export function createAsyncOperation(module, name) {
  const prefix = `${module}/${name}`;

  const REQUEST = `${prefix}.REQUEST`;
  const SUCCESS = `${prefix}.SUCCESS`;
  const FAILURE = `${prefix}.FAILURE`;

  return {
    module,

    name,

    REQUEST,

    request(input = {}) {
      return {
        type: REQUEST,
        ...input,
      };
    },

    SUCCESS,

    success(output = {}) {
      return (dispatch) => {
        dispatch({
          type: SUCCESS,
          ...output,
        });

        return output;
      };
    },

    FAILURE,

    failure(error) {
      return (dispatch) => {
        dispatch({
          type: FAILURE,
        });

        throw error;
      };
    },
  };
}
