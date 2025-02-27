import React from "react";
// export default function IntroSection() {
//     return (
//         <section>
//             <h1>Result University</h1>
//             <h3 style={{color: 'blueviolet'}}>
//                 Университет frontend-разработки,
//                 который насыщает IT-сферу квалифицированными специалистами
//             </h3>
//         </section>
//     )
// }
export default function IntroSection() {
    return (
        React.createElement(
            'section',
            null,
            [React.createElement('h1', {key: 1}, 'Result University'),
            React.createElement('h3', {style: {color: 'blueviolet'}, key: 2}, 'Университет frontend-разработки, который насыщает IT-сферу квалифицированными специалистами')
            ])
    )
}