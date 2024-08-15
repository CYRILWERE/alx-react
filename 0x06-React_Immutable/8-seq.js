import { Map, Seq } from 'immutable';

export function printBestStudents(grades) {
    // Convert the grades object into an Immutable Map
    const gradesMap = Map(grades);

    // Use Seq to filter and transform the data
    Seq(gradesMap)
        .filter(student => student.get('score') >= 70)
        .forEach(student => {
            const firstName = capitalizeFirstLetter(student.get('firstName'));
            const lastName = capitalizeFirstLetter(student.get('lastName'));
            console.log(`${firstName} ${lastName}`);
        });
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

