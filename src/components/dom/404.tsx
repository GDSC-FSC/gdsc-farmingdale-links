
import { Main, Section, Article, Menu } from '@/src/components/templates/index';
import { Button } from '@nextui-org/react';

export const NotFound = (): JSX.Element => {

  return (
    <>
      <Main className="flex flex-col items-center justify-center w-screen h-screen">
        <Section
          className={`

          `}
        >
          <Article
            className={`

            `}
          >
            <h1
              className={`

              `}
            >
              <span
                className={``}
              >
                404
              </span>
              <i
                className={`

                `}
              > - </i>
              <span
                className={`

                `}
              >
                Not Found
              </span>
            </h1>
            <p
              className={`

              `}
            >
              <b
                className={``}
              >
                The page you are looking for does not exist.
              </b>
            </p>
          </Article>
          <Menu className={`flex  justify-around`}>
            <li
              className={`

              `}
            >
              <Button radius={`md`} color={`primary`} variant={`ghost`}>
                Home
              </Button>
            </li>
            <li>
              <Button radius={`md`} color={`primary`} variant={`ghost`}>
                Back
              </Button>
            </li>
          </Menu>
        </Section>
      </Main>
    </>
  );
}
