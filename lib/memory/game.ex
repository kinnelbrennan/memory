defmodule Memory.Game do
  def new do
    %{
      tiles: tile_shuffle(),
      correct_tiles: [],
      open_tiles: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
                    " ", " ", " ", " ", " ", " "],
      guessed_tiles:[],
      last_index: -1,
      guess_count: 0,
      score: 0,
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
    %{
      guessCount: gs
      score: calc_score(gs, cs)
      text: flipped()
    }

  end

  def calc_score(guesses, correct) do
    (Enum.count(correct) * 10) - guesses
  end
end
