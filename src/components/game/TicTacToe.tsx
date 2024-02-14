/* eslint-disable no-case-declarations */
import React, { useState, useEffect, useCallback } from "react";
import {
  PLAYER_X,
  PLAYER_O,
  DRAW,
  GAME_STATES,
  DIMENSIONS,
  GAME_MODES,
} from "@/src/constants/TicTacToe";
import Board from "./Board";
import { getRandomInt, switchPlayer } from "@/src/utils/TicTacToe";
import { minimax } from "@/src/utils/minimax";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { ParticlesContainer } from "@/src/components/particles/Confetti";
import { Section, Article } from "@/src/components/templates/index";
import { cn } from "@/src/lib/utils";

const arr = new Array(DIMENSIONS ** 2).fill(null);
const board = new Board();

interface Props {
  squares?: Array<number | null>;
}
const TicTacToe = ({ squares = arr }: Props) => {
  const [players, setPlayers] = useState<Record<string, number | null>>({
    human: null,
    ai: null,
  });
  const [gameState, setGameState] = useState(GAME_STATES.notStarted);
  const [grid, setGrid] = useState(squares);
  const [winner, setWinner] = useState<string | null>(null);
  const [nextMove, setNextMove] = useState<null | number>(null);
  const [mode, setMode] = useState(GAME_MODES.medium);
  const [appear, setAppear] = useState<boolean>(false);

  /**
   * On every move, check if there is a winner. If yes, set game state to over and open result modal
  */
  useEffect(() => {
    const boardWinner = board.getWinner(grid);

    const declareWinner = (winner: number) => {
      let winnerStr: string;
      switch (winner) {
        case PLAYER_X:
          winnerStr = "Player X wins!";
          break;
        case PLAYER_O:
          winnerStr = "Player O wins!";
          break;
        case DRAW:
        default:
          winnerStr = "It's a draw";
      }
      setGameState(GAME_STATES.over);
      setWinner(winnerStr);
      // Slight delay for the modal so there is some time to see the last move
    };

    if (boardWinner !== null && gameState !== GAME_STATES.over) {
      declareWinner(boardWinner);
      if (boardWinner === players.human) {
        setAppear(true);
      }
    }
  }, [gameState, grid, nextMove, players.human]);

  const move = useCallback(
    (index: number, player: number | null) => {
      if (player !== null && gameState === GAME_STATES.inProgress) {
        setGrid((grid) => {
          const gridCopy = grid.concat();
          gridCopy[index] = player;
          return gridCopy;
        });
      }
    },
    [gameState]
  );

  const aiMove = useCallback(() => {
    const board = new Board(grid.concat());
    const emptyIndices = board.getEmptySquares(grid);
    let index;
    switch (mode) {
      case GAME_MODES.easy:
        do {
          index = getRandomInt(0, 8);
        } while (!emptyIndices.includes(index));
        break;
      case GAME_MODES.medium:
        const smartMove = !board.isEmpty(grid) && Math.random() < 0.5;
        if (smartMove) {
          index = minimax(board, players.ai!)[1];
        } else {
          do {
            index = getRandomInt(0, 8);
          } while (!emptyIndices.includes(index));
        }
        break;
      case GAME_MODES.difficult:
      default:
        index = board.isEmpty(grid)
          ? getRandomInt(0, 8)
          : minimax(board, players.ai!)[1];
    }
    if (index !== null && !grid[index]) {
      if (players.ai !== null) {
        move(index, players.ai);
      }
      setNextMove(players.human);
    }
  }, [move, grid, players, mode]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (
      nextMove !== null &&
      nextMove === players.ai &&
      gameState !== GAME_STATES.over
    ) {
      timeout = setTimeout(() => {
        aiMove();
      }, 500);
    }
    return () => timeout && clearTimeout(timeout);
  }, [nextMove, aiMove, players.ai, gameState]);

  const humanMove = (index: number) => {
    if (!grid[index] && nextMove === players.human) {
      move(index, players.human);
      setNextMove(players.ai);
    }
  };

  const choosePlayer = (option: number) => {
    setPlayers({ human: option, ai: switchPlayer(option) });
    setGameState(GAME_STATES.inProgress);
    setNextMove(PLAYER_X);
  };

  const startNewGame = () => {
    setGameState(GAME_STATES.notStarted);
    setGrid(arr);
    setAppear(false);
  };

  const changeMode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(e.target.value);
  };

  return gameState === GAME_STATES.notStarted ? (
    <Card
      className={`
        border-none shadow-none p-2 bg-transparent not-sr-only
      `}
    >
      <CardContent
        className={`
        flex flex-row items-center justify-between w-full h-fit gap-4
        `}
      >
        <Article
          role={`button`}
          onClick={() => choosePlayer(PLAYER_X)}
          className={`
          bg-[#dedede] rounded-lg items-center text-center justify-center flex size-fit p-2 hover:bg-[#bebebe]
          hover:shadow-lg transition-all duration-300 ease-in-out
          `}
        >
          <span
            className={`text-[55px]`}
          >
            ✖️
          </span>
        </Article>
        <p
          className={`
            text-[24px] font-bold text-uppercase select-none
          `}
        >
          {"or"}
        </p>
        <Article
          framer
          role={`button`}
          onClick={() => choosePlayer(PLAYER_O)}
          className={`
            bg-[#dedede] rounded-lg items-center text-center justify-center flex size-fit p-2 hover:bg-[#bebebe] hover:shadow-lg transition-all duration-300 ease-in-out
          `}
        >
          <span
            className={`text-[55px]`}
          >
            ⭕
          </span>
        </Article>
      </CardContent>
      <CardFooter>
        <Select>
          <SelectTrigger>
            <SelectValue
              onChange={changeMode} placeholder={`Select difficulty`}
            />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(GAME_MODES).map((key) => {
              const gameMode = GAME_MODES[key];
              return (
                <SelectItem key={gameMode} value={gameMode}>
                  {key}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardFooter>
    </Card>
  ) : (
    <>
      {(gameState === GAME_STATES.over) && (
        <>
          {
            appear && (
              <ParticlesContainer />
            )
          }
          {/* Disappear after 5 seconds */}
          <Card
            style={{
              zIndex: 1000,
              translate: "translate(-50%, -50%)",
            }}
            className={` bg-white fixed left-[50%] top-[50%] z-50 grid w-md translate-x-[-50%] translate-y-[-50%] backface-hidden p-[0.25rem] rounded-md border-[0.5px] border-[#41403e]/20`}
          >
            <CardHeader
              className={`text-center`}
            >
              <CardTitle>
                {"Game over"}
              </CardTitle>
              <CardDescription>
                {`🎉 ${winner} 🎉`}
              </CardDescription>
            </CardHeader>
          </Card>
        </>
      )}
      <Section
        className={`
        flex flex-col items-center justify-center gap-4
        `}
      >
        <h3
          className={`text-[24px] font-bold text-uppercase select-none`}
        >
          {players.human === PLAYER_X
            ? "You are playing as ✖️"
            : "You are playing as ⭕"}
        </h3>
        <Container
        >
          {grid.map((value, index) => {
            const isActive = value !== null;

            return (
              <div
                className={
                  `bg-[#dedede] rounded-md
              flex flex-col justify-center items-center size-28 hover:bg-[#bebebe] hover:shadow-lg transition-all duration-300 ease-in-out hover:cursor-pointer`
                }
                data-testid={`square_${index}`}
                key={index}
                onClick={() => humanMove(index)}
              >
                {isActive && <p className={`text-[68px]`}>{value === PLAYER_X ? "✖️" : "⭕"}</p>}
              </div>
            );
          })}
        </Container>
        <Button
          className={`text-[16px]`}
          onClick={startNewGame}
          content="Start over"
        >
          {"Start over"}
        </Button>
      </Section>
    </>
  );
};

const Container = React.forwardRef<React.ElementRef<typeof Article>, React.ComponentPropsWithoutRef<typeof Article>>(({ className, ...props }, ref) => {
  return <Article ref={ref} className={cn(`grid grid-cols-3 grid-rows-3
        gap-2 rounded-lg h-fit w-fit p-2 shadow-lg`, className)} {...props} />;
});

export default TicTacToe;
