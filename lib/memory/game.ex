defmodule Memory.Game do
  def new do
    %{
      tiles: tile_shuffle(),
      correct_tiles: [],
      open_tiles: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
                    " ", " ", " ", " ", " ", " "],
      guessed_tiles: [],
      last_index: -1,
      guess_count: 0,
      score: 0,
      current_index: -1,
    }
  end

  def client_view(game) do
    ts = game.tiles
    os = game.open_tiles
    cs = game.correct_tiles
    is = game.last_index
    gs = game.guess_count
    ss = game.score
    tg = game.guessed_tiles
    ci = game.current_index
    %{
      guessCount: gs,
      score: calc_score(gs, cs),
      text: flipped(is, ci, os, ts),
    }
  end

  def flipped(prev, cur, grid, tiles) do
    current = Enum.at(tiles, cur)
    previous = Enum.at(tiles, prev)
    if current == previous do
      List.replace_at(grid, cur, current)
      List.replace_at(grid, prev, previous)
    end
    if current != previous do
      grid
    end
  end

  def calc_score(guesses, correct) do
    (Enum.count(correct) * 10) - guesses
  end

  def tile_shuffle() do
    tile_standard = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F",
                    "G", "G", "H", "H"]
    Enum.shuffle(tile_standard)
  end
end
