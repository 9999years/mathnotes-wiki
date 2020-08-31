{ pkgs ? import <nixpkgs> { } }:
let
  inherit (pkgs) stdenv lib;
  inherit (pkgs.nodePackages) tiddlywiki;
in stdenv.mkDerivation {
  pname = "tiddlywiki";
  version = "0.0.1";
  src = ./.;
  buildInputs = [ tiddlywiki ];
}
