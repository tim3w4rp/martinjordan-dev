
import { Colors } from './colors';
import { Measures } from './measures';

const ocean = {
           type: 'Radial',
            direction: {
             from: {x: 0.5, y: 0.4999999999999999 },
             to:   {x: 0.5, y: 0.9999999999999999 },
           },
            stops: [
             {
               color: "#0368ff",
               position: 0
             },
             {
               color: "#10e7e2",
               position: 1
             },
           ],
         };
const sunrise = {
           type: 'Linear',
            direction: {
             from: {x: 0, y: 0 },
             to:   {x: 1, y: 1 },
           },
            stops: [
             {
               color: "#ca7cd8",
               position: 0
             },
             {
               color: "#ff68a8",
               position: 0.3698000013828278
             },
             {
               color: "#f9eb0f",
               position: 1
             },
           ],
         };
const multilayerGradient = {
           type: 'Radial',
            direction: {
             from: {x: 0.5, y: 0.4999999999999999 },
             to:   {x: 0.5, y: 0.9999999999999999 },
           },
            stops: [
             {
               color: "#00ffff",
               position: 0
             },
             {
               color: "#ffff00",
               position: 1
             },
           ],
         };
const brandingTwilight = {
           type: 'Linear',
            direction: {
             from: {x: 4.440892098500626e-16, y: 0 },
             to:   {x: 1, y: 1.7763568394002505e-15 },
           },
            stops: [
             {
               color: "#19426c",
               position: 0
             },
             {
               color: "#2c1f56",
               position: 1
             },
           ],
         };
const brandingNavigation = {
           type: 'Linear',
            direction: {
             from: {x: 4.440892098500626e-16, y: 0 },
             to:   {x: 1, y: 1.7763568394002505e-15 },
           },
            stops: [
             {
               color: "#19426c",
               position: 0
             },
             {
               color: "#2c1f56",
               position: 1
             },
           ],
         };
const specialBlanketGradient = {
           type: 'Linear',
            direction: {
             from: {x: 0.5, y: 3.0616171314629196e-17 },
             to:   {x: 0.5, y: 1 },
           },
            stops: [
             {
               color: "#14161852",
               position: 0
             },
             {
               color: "#14161800",
               position: 1
             },
           ],
         };
const specialFade = {
           type: 'Linear',
            direction: {
             from: {x: 0, y: 0.5 },
             to:   {x: 1, y: 0.5 },
           },
            stops: [
             {
               color: "#ffffff00",
               position: 0
             },
             {
               color: "#ffffff",
               position: 1
             },
           ],
         };


export const Gradients = {
      ocean,
      sunrise,
      multilayerGradient,
      brandingTwilight,
      brandingNavigation,
      specialBlanketGradient,
      specialFade,
}