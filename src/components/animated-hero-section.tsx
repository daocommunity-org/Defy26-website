"use client";

import { useEffect, useRef } from "react";

const COLOR = "#39ff14";
const HIT_COLOR = "#333333";
const BACKGROUND_COLOR = "#000000";
const BALL_COLOR = "#FFFFFF";
const PADDLE_COLOR = "#FFFFFF";
const LETTER_SPACING = 1;

const PIXEL_MAP = {
  D: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  E: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  F: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  Y: [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  "2": [
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  "6": [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  H: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  A: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  C: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  K: [
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
  ],
  T: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  O: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  B: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  U: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  L: [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  M: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  P: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  S: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  G: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ],
  R: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
  ],
  V: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
  ],
};

interface Pixel {
  x: number;
  y: number;
  size: number;
  hit: boolean;
}

interface Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
}

interface Paddle {
  x: number;
  y: number;
  width: number;
  height: number;
  targetY: number;
  isVertical: boolean;
}

export function Defy26Hackathon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const ballRef = useRef<Ball>({ x: 0, y: 0, dx: 0, dy: 0, radius: 0 });
  const paddlesRef = useRef<Paddle[]>([]);
  const scaleRef = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      scaleRef.current = Math.min(canvas.width / 1000, canvas.height / 1000);
      initializeGame();
    };

    const initializeGame = () => {
      const scale = scaleRef.current;
      const isMobile = canvas.width < 768;

      // Responsive pixel sizes - larger on mobile for better visibility
      const LARGE_PIXEL_SIZE = isMobile ? 12 * scale : 10 * scale;
      const SMALL_PIXEL_SIZE = isMobile ? 6 * scale : 5 * scale;
      const BALL_SPEED = 6 * scale;

      pixelsRef.current = [];
      const mainText = "DEFY 26";
      const tagline = "BUILD  THE  FUTURE";

      const calculateWordWidth = (word: string, pixelSize: number) => {
        const words = word.split(" ");
        let totalWidth = 0;

        words.forEach((w, idx) => {
          const wordWidth =
            w.split("").reduce((width, letter) => {
              const letterWidth =
                PIXEL_MAP[letter as keyof typeof PIXEL_MAP]?.[0]?.length ?? 0;
              return (
                width + letterWidth * pixelSize + LETTER_SPACING * pixelSize
              );
            }, 0) -
            LETTER_SPACING * pixelSize;

          totalWidth += wordWidth;
          // Add space between words (not after the last word)
          if (idx < words.length - 1) {
            totalWidth += 5 * pixelSize; // Space width
          }
        });

        return totalWidth;
      };

      const totalWidthLarge = calculateWordWidth(mainText, LARGE_PIXEL_SIZE);
      const totalWidthSmall = calculateWordWidth(tagline, SMALL_PIXEL_SIZE);
      const totalWidth = Math.max(totalWidthLarge, totalWidthSmall);

      // More aggressive scaling on mobile to fill space better
      const maxWidth = isMobile ? canvas.width * 0.9 : canvas.width * 0.8;
      const scaleFactor = maxWidth / totalWidth;

      const adjustedLargePixelSize = LARGE_PIXEL_SIZE * scaleFactor;
      const adjustedSmallPixelSize = SMALL_PIXEL_SIZE * scaleFactor;

      const largeTextHeight = 5 * adjustedLargePixelSize;
      const smallTextHeight = 5 * adjustedSmallPixelSize;

      // Tighter spacing on mobile
      const spaceBetweenLines = isMobile
        ? 3 * adjustedLargePixelSize
        : 4 * adjustedLargePixelSize;
      const totalTextHeight =
        largeTextHeight + spaceBetweenLines + smallTextHeight;

      let startY = (canvas.height - totalTextHeight) / 2;

      // Draw main text "DEFY 26"
      const mainTextWidth = calculateWordWidth(
        mainText,
        adjustedLargePixelSize
      );
      let startX = (canvas.width - mainTextWidth) / 2;

      mainText.split("").forEach((letter) => {
        if (letter === " ") {
          startX += 5 * adjustedLargePixelSize; // Space width
          return;
        }

        const pixelMap = PIXEL_MAP[letter as keyof typeof PIXEL_MAP];
        if (!pixelMap) return;

        for (let i = 0; i < pixelMap.length; i++) {
          for (let j = 0; j < pixelMap[i].length; j++) {
            if (pixelMap[i][j]) {
              const x = startX + j * adjustedLargePixelSize;
              const y = startY + i * adjustedLargePixelSize;
              pixelsRef.current.push({
                x,
                y,
                size: adjustedLargePixelSize,
                hit: false,
              });
            }
          }
        }
        startX +=
          (pixelMap[0].length + LETTER_SPACING) * adjustedLargePixelSize;
      });

      startY += largeTextHeight + spaceBetweenLines;

      // Draw tagline
      const taglineWidth = calculateWordWidth(tagline, adjustedSmallPixelSize);
      startX = (canvas.width - taglineWidth) / 2;

      tagline.split("").forEach((letter) => {
        if (letter === " ") {
          startX += 5 * adjustedSmallPixelSize; // Space width
          return;
        }

        const pixelMap = PIXEL_MAP[letter as keyof typeof PIXEL_MAP];
        if (!pixelMap) return;

        for (let i = 0; i < pixelMap.length; i++) {
          for (let j = 0; j < pixelMap[i].length; j++) {
            if (pixelMap[i][j]) {
              const x = startX + j * adjustedSmallPixelSize;
              const y = startY + i * adjustedSmallPixelSize;
              pixelsRef.current.push({
                x,
                y,
                size: adjustedSmallPixelSize,
                hit: false,
              });
            }
          }
        }
        startX +=
          (pixelMap[0].length + LETTER_SPACING) * adjustedSmallPixelSize;
      });

      const ballStartX = canvas.width * 0.9;
      const ballStartY = canvas.height * 0.1;

      ballRef.current = {
        x: ballStartX,
        y: ballStartY,
        dx: -BALL_SPEED,
        dy: BALL_SPEED,
        radius: adjustedLargePixelSize / 2,
      };

      const paddleWidth = adjustedLargePixelSize;
      const paddleLength = isMobile
        ? 8 * adjustedLargePixelSize
        : 10 * adjustedLargePixelSize;

      paddlesRef.current = [
        {
          x: 0,
          y: canvas.height / 2 - paddleLength / 2,
          width: paddleWidth,
          height: paddleLength,
          targetY: canvas.height / 2 - paddleLength / 2,
          isVertical: true,
        },
        {
          x: canvas.width - paddleWidth,
          y: canvas.height / 2 - paddleLength / 2,
          width: paddleWidth,
          height: paddleLength,
          targetY: canvas.height / 2 - paddleLength / 2,
          isVertical: true,
        },
        {
          x: canvas.width / 2 - paddleLength / 2,
          y: 0,
          width: paddleLength,
          height: paddleWidth,
          targetY: canvas.width / 2 - paddleLength / 2,
          isVertical: false,
        },
        {
          x: canvas.width / 2 - paddleLength / 2,
          y: canvas.height - paddleWidth,
          width: paddleLength,
          height: paddleWidth,
          targetY: canvas.width / 2 - paddleLength / 2,
          isVertical: false,
        },
      ];
    };

    const updateGame = () => {
      const ball = ballRef.current;
      const paddles = paddlesRef.current;

      ball.x += ball.dx;
      ball.y += ball.dy;

      if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.dy = -ball.dy;
      }
      if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.dx = -ball.dx;
      }

      paddles.forEach((paddle) => {
        if (paddle.isVertical) {
          if (
            ball.x - ball.radius < paddle.x + paddle.width &&
            ball.x + ball.radius > paddle.x &&
            ball.y > paddle.y &&
            ball.y < paddle.y + paddle.height
          ) {
            ball.dx = -ball.dx;
          }
        } else {
          if (
            ball.y - ball.radius < paddle.y + paddle.height &&
            ball.y + ball.radius > paddle.y &&
            ball.x > paddle.x &&
            ball.x < paddle.x + paddle.width
          ) {
            ball.dy = -ball.dy;
          }
        }
      });

      paddles.forEach((paddle) => {
        if (paddle.isVertical) {
          paddle.targetY = ball.y - paddle.height / 2;
          paddle.targetY = Math.max(
            0,
            Math.min(canvas.height - paddle.height, paddle.targetY)
          );
          paddle.y += (paddle.targetY - paddle.y) * 0.1;
        } else {
          paddle.targetY = ball.x - paddle.width / 2;
          paddle.targetY = Math.max(
            0,
            Math.min(canvas.width - paddle.width, paddle.targetY)
          );
          paddle.x += (paddle.targetY - paddle.x) * 0.1;
        }
      });

      pixelsRef.current.forEach((pixel) => {
        if (
          !pixel.hit &&
          ball.x + ball.radius > pixel.x &&
          ball.x - ball.radius < pixel.x + pixel.size &&
          ball.y + ball.radius > pixel.y &&
          ball.y - ball.radius < pixel.y + pixel.size
        ) {
          pixel.hit = true;
          const centerX = pixel.x + pixel.size / 2;
          const centerY = pixel.y + pixel.size / 2;
          if (Math.abs(ball.x - centerX) > Math.abs(ball.y - centerY)) {
            ball.dx = -ball.dx;
          } else {
            ball.dy = -ball.dy;
          }
        }
      });
    };

    const drawGame = () => {
      if (!ctx) return;

      ctx.fillStyle = BACKGROUND_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      pixelsRef.current.forEach((pixel) => {
        ctx.fillStyle = pixel.hit ? HIT_COLOR : COLOR;
        ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size);
      });

      ctx.fillStyle = BALL_COLOR;
      ctx.beginPath();
      ctx.arc(
        ballRef.current.x,
        ballRef.current.y,
        ballRef.current.radius,
        0,
        Math.PI * 2
      );
      ctx.fill();

      ctx.fillStyle = PADDLE_COLOR;
      paddlesRef.current.forEach((paddle) => {
        ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
      });
    };

    const gameLoop = () => {
      updateGame();
      drawGame();
      requestAnimationFrame(gameLoop);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    gameLoop();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      aria-label="Defy 26: Fullscreen Pong game with pixel text"
    />
  );
}

export default Defy26Hackathon;
