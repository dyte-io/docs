import { useEffect, useRef } from 'react';

export default function useConnectedLine({
  lineElem,
  startElemPos = 'center',
  endElemPos = 'center'
}: any): any {
  const startElem = useRef<HTMLElement>(null);
  const endElem = useRef<HTMLElement>(null);
  const pathRef = useRef<HTMLElement>(null);

  const updateLine = () => {
    if (lineElem.current && startElem.current && endElem.current) {
      const el1 = startElem.current.getBoundingClientRect();
      const el2 = endElem.current.getBoundingClientRect();

      let startX = el1.left;
      if(startElemPos.includes('right')){
        startX += el1.width;
      } else if (startElemPos.includes('left') == false){
        startX += el1.width / 2;
      }
      const startY = el1.top + el1.height / 2;
      let endX = el2.left;
      if(endElemPos.includes('right')){
        endX += el2.width;
      } else if (endElemPos.includes('left') == false){
        endX += el2.width / 2;
      }
      const endY = el2.top + el2.height / 2;

      const curve = `M ${startX},${startY} C ${startX},${(startY + endY) / 2} ${endX},${(startY + endY) / 2} ${endX},${endY}`;
      pathRef.current?.setAttribute('d', curve);
    }
  };

  useEffect(() => {
    updateLine();
  },[]  );

  return [startElem, endElem, pathRef];
}
