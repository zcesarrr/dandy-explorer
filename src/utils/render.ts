export function createRenderer<Params extends object>(
    templates: {
        [K in keyof Params]: (params: Params[K]) => string;
    },
) {
    return <K extends keyof Params>(value: {
        type: K;
        params: Params[K];
    }) => templates[value.type](value.params);
}
