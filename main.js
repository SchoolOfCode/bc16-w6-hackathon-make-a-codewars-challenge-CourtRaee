export function legoBuild(piecesTime, totalPieces) {
    const totalMinutes = piecesTime * totalPieces;
    return totalMinutes <= 180;
  }
  legoBuild(-5, -5);
