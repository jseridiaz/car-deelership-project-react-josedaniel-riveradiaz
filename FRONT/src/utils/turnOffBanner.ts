export const turnOffBanner = (
   state: React.Dispatch<React.SetStateAction<boolean>>,
   time: number,
   value: boolean,
): void => {
   setTimeout(() => {
      state(value)
   }, time)
}
