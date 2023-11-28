
import { Colors } from './colors';
import { Measures } from './measures';

const sunrise = {
           type: 'Linear',
            direction: {
             from: {x: 0.1464, y: 0.1464 },
             to:   {x: 0.8536, y: 0.8536 },
           },
            stops: [
             {
               color: "#ca7cd8",
               position: 0
             },
             {
               color: "#ff68a8",
               position: 0.36979999999999996
             },
             {
               color: "#f9eb0f",
               position: 1
             },
           ],
         };


export const Gradients = {
      sunrise,
}