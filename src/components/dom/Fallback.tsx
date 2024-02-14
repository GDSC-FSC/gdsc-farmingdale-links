import TicTacToe from "@/src/components/game/TicTacToe"
import { CenterLayout } from "../layouts"
export default function Fallback() {
  return (
    <CenterLayout Element={`main`}>
      <TicTacToe />
      {/* <h1>Offline</h1> */}
    </CenterLayout>
  )
}
