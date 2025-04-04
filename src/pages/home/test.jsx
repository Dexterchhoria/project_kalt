import React from "react";
import TextGenerateEffect  from "../../components/ui/text-generate-effect";

const words = 'Kaltarang is RGIPTs annual cultural fest, renowned for being a dynamic and immersive celebration of art, culture, and talent. Since its inception, Kaltarang has grown into a prestigious platform where creativity meets competition.The 10th edition, Kaltarang25, promises to be the grandest yet, bringing together students from across the country to experience a world where fantasy and tradition intertwine. With a diverse array of competitions, performances, and workshops, Kaltarang celebrates the spirit of youth and innovations.';

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />;
  }