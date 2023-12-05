import { memo } from 'react';
import { Span, Div, Input, Section, H2, Form, Button, P, Ul, Li } from '..';
import AllBooksStyles from '@/app/CssModules/AllBooks.module.css';

const AllBooksMain = () => {
  return (
    <main>
      <Section>
        <Div className={AllBooksStyles.MainBox}>
          <Div className={AllBooksStyles.MainBoxInner}>
            <Div className={`${AllBooksStyles.MainSearchBox}`}>
              <H2 className={`${AllBooksStyles.Title}`}>
                You’ve got
                <Span
                  className={`${AllBooksStyles.Title}, ${AllBooksStyles.TitleText}`}
                >
                  7 book
                </Span>
              </H2>
              <Form className={`${AllBooksStyles.CreateForm}`}>
                <Input
                  className={`${AllBooksStyles.CreateInput}`}
                  placeholder="Enter your name"
                  required="required"
                />
                <Button className={`${AllBooksStyles.CreateBtn}`}>
                  + Create a book
                </Button>
              </Form>
            </Div>
            <H2 className={`${AllBooksStyles.MessageTitle}`}>
              Your task today
            </H2>
          </Div>
          <Div className={AllBooksStyles.CardsWrapper}>.
            <Div className={AllBooksStyles.Card}>
              <Ul className={AllBooksStyles.CardFirstItem}>
                <Li>
                  <Span>Raspberry Pi User Guide</Span>
                </Li>
                <Li>
                  <P>
                    Lorem ipsum dolor sit amet consectetur. Nulla adipiscing
                    neque varius vestibulum magna in. Tortor quisque nisl congue
                    ut tellus sem id. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Exercitationem nulla eveniet doloribus non
                    vitae, architecto ullam sed amet ab facilis cumque dicta
                    asperiores labore ducimus neque, illum earum! Explicabo, rem
                    numquam. Quasi magnam illum nisi accusantium officia,
                    inventore cumque consequuntur placeat! Accusantium hic
                    adipisci aspernatur magni voluptatibus suscipit quisquam
                    consequatur, magnam totam dicta voluptatem nostrum eius
                    soluta quia corporis quidem illo cupiditate ratione sequi
                    numquam blanditiis illum rem quae nisi. Dolorum nesciunt in
                    enim fugiat, animi deleniti accusantium delectus architecto
                    ex, quos nemo, neque consequatur repellendus? Aperiam et
                    accusantium consectetur qui inventore quia quaerat,
                    voluptate dignissimos ut adipisci assumenda voluptatum
                    dolore repellat sunt eius fuga magnam itaque quas sapiente
                    perspiciatis. Doloribus, delectus.
                  </P>
                </Li>
              </Ul>
              <Ul className={AllBooksStyles.CardSecondItem}>
                <Li>
                  <Span>Eben Upton: 2012-year</Span>
                </Li>
                <Li>
                  <Span className={AllBooksStyles.CardSecondItemText}>
                    211 pages
                  </Span>
                </Li>
              </Ul>
            </Div>
            <Div className={AllBooksStyles.Card}>
              <Ul className={AllBooksStyles.CardFirstItem}>
                <Li>
                  <Span>Raspberry Pi User Guide</Span>
                </Li>
                <Li>
                  <P>
                    Lorem ipsum dolor sit amet consectetur. Nulla adipiscing
                    neque varius vestibulum magna in. Tortor quisque nisl congue
                    ut tellus sem id. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Exercitationem nulla eveniet doloribus non
                    vitae, architecto ullam sed amet ab facilis cumque dicta
                    asperiores labore ducimus neque, illum earum! Explicabo, rem
                    numquam. Quasi magnam illum nisi accusantium officia,
                    inventore cumque consequuntur placeat! Accusantium hic
                    adipisci aspernatur magni voluptatibus suscipit quisquam
                    consequatur, magnam totam dicta voluptatem nostrum eius
                    soluta quia corporis quidem illo cupiditate ratione sequi
                    numquam blanditiis illum rem quae nisi. Dolorum nesciunt in
                    enim fugiat, animi deleniti accusantium delectus architecto
                    ex, quos nemo, neque consequatur repellendus? Aperiam et
                    accusantium consectetur qui inventore quia quaerat,
                    voluptate dignissimos ut adipisci assumenda voluptatum
                    dolore repellat sunt eius fuga magnam itaque quas sapiente
                    perspiciatis. Doloribus, delectus.
                  </P>
                </Li>
              </Ul>
              <Ul className={AllBooksStyles.CardSecondItem}>
                <Li>
                  <Span>Eben Upton: 2012-year</Span>
                </Li>
                <Li>
                  <Span className={AllBooksStyles.CardSecondItemText}>
                    211 pages
                  </Span>
                </Li>
              </Ul>
            </Div>
          </Div>
        </Div>
      </Section>
    </main>
  );
};

export default memo(AllBooksMain);
