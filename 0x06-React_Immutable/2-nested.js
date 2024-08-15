export default function accessImmutableObject(object, array) {
    return array.reduce((acc, key) => {
        return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, object);
}

