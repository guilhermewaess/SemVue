export default {
    props: {
        id: {
            validator: prop => prop.length,
            required: true,
        },
        customClass: {
            type: String,
            default: '',
        },
        options: {
            type: Object,
            default() { return {}; },
        },
    },
};
