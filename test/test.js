import { testChessBoard } from "./test_ChessBoard.js";
import { testEnvelops } from "./test_Envelops.js";
import { testTriangles } from "./test_Triangles.js";
import { testPalindrome } from "./test_Palindrome.js";
import { testLuckyTicket } from "./test_LuckyTickets.js";
import { testNumbersRow } from "./test_NumbersRow.js";
import { testFibRow } from "./test_FibRow.js";

mocha.setup("bdd");

const ass = chai.assert;

testChessBoard(ass);
testEnvelops(ass);
testTriangles(ass);
testPalindrome(ass);
testLuckyTicket(ass);
testNumbersRow(ass);
testFibRow(ass);

mocha.run();
