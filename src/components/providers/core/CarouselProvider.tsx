import React, { createContext, useContext, useState, FC } from "react";

export type CarouselContextValue = {
  mediaType: 'image' | 'video';
  setMediaType: React.Dispatch<React.SetStateAction<CarouselContextValue['mediaType']>>;
};

export const CarouselContext = createContext<CarouselContextValue | null>(null);

export const CarouselProvider: FC<{
  children: React.ReactNode;
}> = (
  props
) => {
  const { children } = props;
  const [mediaType, setMediaType] = useState<CarouselContextValue['mediaType']>('image');
  const contextValue: CarouselContextValue = {
    mediaType,
    setMediaType,
  };
  return (
    <CarouselContext.Provider value={contextValue}>
      {children}
    </CarouselContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCarousel() {
  return useContext(CarouselContext);
}

export default CarouselProvider
