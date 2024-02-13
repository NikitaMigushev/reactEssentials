import Accordion from './components/Accordion/Accordion.jsx';
import AccordionTitle from "./components/Accordion/AccordionTitle.jsx";
import SearchableList from "./components/SearchableList/SeatchableList.jsx";

const places = [
    {
        name: 'Place1',
        description: 'Description place 1'
    },
    {
        name: 'Place2',
        description: 'Description place 2'
    },
    {
        name: 'Place3',
        description: 'Description place 3'
    },
]


function App() {
    return (
        <main>
            <section>
                <h2>Why work with us?</h2>

                <Accordion className="accordion">
                    <Accordion.Item
                        id="experience"
                        className="accordion-item"
                    >
                        <Accordion.Title className="accordion-item-title">
                            We got 20 years of experience
                        </Accordion.Title>
                        <Accordion.Content className="accordion-item-content">
                            <article>
                                <p>You can&apos;t go wrong with us.</p>
                                <p>
                                    We are in the business of planning highly individualized
                                    vacation trips for more than 20 years.
                                </p>
                            </article>
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item
                        id="local-guides"
                        className="accordion-item"
                    >
                        <Accordion.Title className="accordion-item-title">
                            We work with local guides
                        </Accordion.Title>
                        <Accordion.Content className="accordion-item-content">
                            <article>
                                <p>You can&apos;t go wrong with us.</p>
                                <p>
                                    We are in the business of planning highly individualized
                                    vacation trips for more than 20 years.
                                </p>
                            </article>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </section>
            <section>
                <SearchableList items={places} itemKeyFn={(item) => item.name}>
                    {(item) => item.name}
                </SearchableList>
                <SearchableList items={['item1', 'item2']} itemKeyFn={(item) => item}>
                    {(item) => item}
                </SearchableList>
            </section>
        </main>
    );
}

export default App;
