import { testChessBoard } from "./test_ChessBoard.js";
import { testEnvelops } from "./test_Envelops.js";
import { testTriangles } from "./test_Triangles.js";

mocha.setup("bdd");

const ass = chai.assert;

testChessBoard(ass);
testEnvelops(ass);
testTriangles(ass);

mocha.run();
