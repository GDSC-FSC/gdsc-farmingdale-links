import TicTacToe from "@/src/components/game/TicTacToe"
import { CenterLayout } from "../layouts"
import { ImageCarousel, VideoCarousel } from '../../app/components/index';
import { useCarousel } from '../../components/providers';
import Providers from '../../providers/Providers'
export default function Fallback() {
  const { mediaType } = useCarousel();
  return (
    <Providers>
      <CenterLayout Element={`main`} className={``}>
        <TicTacToe />
        {mediaType === 'image' ? (
          <ImageCarousel />
        ) : (
          <VideoCarousel />
        )}
      </CenterLayout>
    </Providers>
  )
}
