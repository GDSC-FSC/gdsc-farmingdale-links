import { useLocation } from 'react-router-dom';
import { Main, Section, Article, Menu } from '@/src/templates/index';
import { Button } from '@nextui-org/react';

export default function NotFound() {
  const location = useLocation();
  const { statusText, message } = (location.state as { statusText: string; message: string }) || {
    statusText: '404',
    message: 'The requested page could not be found.',
  };

  return (
    <>
      <Main className="flex flex-col items-center justify-center w-screen h-screen">
        <Section className={``}>
          <Article className={``}>
            <h1 className={``}>
              <span>{statusText}</span>
              <i> - </i>
              <span>
                <>Not Found</>
              </span>
            </h1>
            <p>
              <b>{message}</b>
            </p>
          </Article>
          <Menu className={`flex  justify-around`}>
            <li>
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
