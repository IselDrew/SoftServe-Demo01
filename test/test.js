import { testChessBoard } from "./test_ChessBoard.js";
import { testEnvelops } from "./test_Envelops.js";

mocha.setup("bdd");

const ass = chai.assert;

testChessBoard(ass);
testEnvelops(ass);

mocha.run();
