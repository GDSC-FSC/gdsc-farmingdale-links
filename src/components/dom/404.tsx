import { useRouteError } from 'react-router-dom';
import { Main, Section, Article, Menu } from '@/src/components/templates/index';
import { Button } from '@nextui-org/react';

export const NotFound = (): JSX.Element => {
  const err = useRouteError() as RouteError;

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
                {err.status}
              </span>
              <i
                className={`

                `}
              > - </i>
              <span
                className={`

                `}
              >
                <>{err.name}</>
              </span>
            </h1>
            <p
              className={`

              `}
            >
              <b
                className={``}
              >
                {err.statusText}
              </b>
            </p>
          </Article>
          <Menu className={`flex  justify-around`}>
            <li
              className={`

              `}
            >
              <Button radius={`md`} color={`primary`} variant={`ghost`}>

              </Button>
            </li>
            <li>
              <Button radius={`md`} color={`primary`} variant={`ghost`}>

              </Button>
            </li>
          </Menu>
        </Section>
      </Main>
    </>
  );
}

type RouteError = Error & { status?: number; statusText?: string };
