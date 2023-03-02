window.SIDEBAR_ITEMS = {"constant":[["OP_0NOTEQUAL","Map 0 to 0 and everything else to 1, in place."],["OP_1ADD","Increment the top stack element in place."],["OP_1SUB","Decrement the top stack element in place."],["OP_2DIV","Fail the script unconditionally, does not even need to be executed."],["OP_2DROP","Drops the top two stack items."],["OP_2DUP","Duplicates the top two stack items as AB -> ABAB."],["OP_2MUL","Fail the script unconditionally, does not even need to be executed."],["OP_2OVER","Copies the two stack items of items two spaces back to the front, as xxAB -> ABxxAB."],["OP_2ROT","Moves the two stack items four spaces back to the front, as xxxxAB -> ABxxxx."],["OP_2SWAP","Swaps the top two pairs, as ABCD -> CDAB."],["OP_3DUP","Duplicates the two three stack items as ABC -> ABCABC."],["OP_ABS","Absolute value the top stack item in place."],["OP_ADD","Pop two stack items and push their sum."],["OP_AND","Fail the script unconditionally, does not even need to be executed."],["OP_BOOLAND","Pop the top two stack items and push 1 if both are nonzero, else push 0."],["OP_BOOLOR","Pop the top two stack items and push 1 if either is nonzero, else push 0."],["OP_CAT","Fail the script unconditionally, does not even need to be executed."],["OP_CHECKMULTISIG","Pop N, N pubkeys, M, M signatures, a dummy (due to bug in reference code), and verify that all M signatures are valid. Push 1 for “all valid”, 0 otherwise."],["OP_CHECKMULTISIGVERIFY","Like the above but return success/failure."],["OP_CHECKSIG","https://en.bitcoin.it/wiki/OP_CHECKSIG pushing 1/0 for success/failure."],["OP_CHECKSIGADD","OP_CHECKSIGADD post tapscript."],["OP_CHECKSIGVERIFY","https://en.bitcoin.it/wiki/OP_CHECKSIG returning success/failure."],["OP_CLTV","https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki"],["OP_CODESEPARATOR","Ignore this and everything preceding when deciding what to sign when signature-checking."],["OP_CSV","https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki"],["OP_DEPTH","Push the current number of stack items onto the stack."],["OP_DIV","Fail the script unconditionally, does not even need to be executed."],["OP_DROP","Drops the top stack item."],["OP_DUP","Duplicates the top stack item."],["OP_ELSE","Execute statements if those after the previous OP_IF were not, and vice-versa. If there is no previous OP_IF, this acts as a RETURN."],["OP_ENDIF","Pop and execute the next statements if a zero element was popped."],["OP_EQUAL","Pushes 1 if the inputs are exactly equal, 0 otherwise."],["OP_EQUALVERIFY","Returns success if the inputs are exactly equal, failure otherwise."],["OP_FROMALTSTACK","Pop one element from the alt stack onto the main stack."],["OP_GREATERTHAN","Pop the top two items; push 1 if the second is greater than the top, 0 otherwise."],["OP_GREATERTHANOREQUAL","Pop the top two items; push 1 if the second is >= the top, 0 otherwise."],["OP_HASH160","Pop the top stack item and push its RIPEMD(SHA256) hash."],["OP_HASH256","Pop the top stack item and push its SHA256(SHA256) hash."],["OP_IF","Pop and execute the next statements if a nonzero element was popped."],["OP_IFDUP","Duplicate the top stack element unless it is zero."],["OP_INVALIDOPCODE","Synonym for OP_RETURN."],["OP_INVERT","Fail the script unconditionally, does not even need to be executed."],["OP_LEFT","Fail the script unconditionally, does not even need to be executed."],["OP_LESSTHAN","Pop the top two items; push 1 if the second is less than the top, 0 otherwise."],["OP_LESSTHANOREQUAL","Pop the top two items; push 1 if the second is <= the top, 0 otherwise."],["OP_LSHIFT","Fail the script unconditionally, does not even need to be executed."],["OP_MAX","Pop the top two items; push the larger."],["OP_MIN","Pop the top two items; push the smaller."],["OP_MOD","Fail the script unconditionally, does not even need to be executed."],["OP_MUL","Fail the script unconditionally, does not even need to be executed."],["OP_NEGATE","Multiply the top stack item by -1 in place."],["OP_NIP","Drops the second-to-top stack item."],["OP_NOP","Does nothing."],["OP_NOP1","Does nothing."],["OP_NOP10","Does nothing."],["OP_NOP4","Does nothing."],["OP_NOP5","Does nothing."],["OP_NOP6","Does nothing."],["OP_NOP7","Does nothing."],["OP_NOP8","Does nothing."],["OP_NOP9","Does nothing."],["OP_NOT","Map 0 to 1 and everything else to 0, in place."],["OP_NOTIF","Pop and execute the next statements if a zero element was popped."],["OP_NUMEQUAL","Pop the top two stack items and push 1 if both are numerically equal, else push 0."],["OP_NUMEQUALVERIFY","Pop the top two stack items and return success if both are numerically equal, else return failure."],["OP_NUMNOTEQUAL","Pop the top two stack items and push 0 if both are numerically equal, else push 1."],["OP_OR","Fail the script unconditionally, does not even need to be executed."],["OP_OVER","Copies the second-to-top stack item, as xA -> AxA."],["OP_PICK","Pop the top stack element as N. Copy the Nth stack element to the top."],["OP_PUSHBYTES_0","Push an empty array onto the stack."],["OP_PUSHBYTES_1","Push the next byte as an array onto the stack."],["OP_PUSHBYTES_10","Push the next 10 bytes as an array onto the stack."],["OP_PUSHBYTES_11","Push the next 11 bytes as an array onto the stack."],["OP_PUSHBYTES_12","Push the next 12 bytes as an array onto the stack."],["OP_PUSHBYTES_13","Push the next 13 bytes as an array onto the stack."],["OP_PUSHBYTES_14","Push the next 14 bytes as an array onto the stack."],["OP_PUSHBYTES_15","Push the next 15 bytes as an array onto the stack."],["OP_PUSHBYTES_16","Push the next 16 bytes as an array onto the stack."],["OP_PUSHBYTES_17","Push the next 17 bytes as an array onto the stack."],["OP_PUSHBYTES_18","Push the next 18 bytes as an array onto the stack."],["OP_PUSHBYTES_19","Push the next 19 bytes as an array onto the stack."],["OP_PUSHBYTES_2","Push the next 2 bytes as an array onto the stack."],["OP_PUSHBYTES_20","Push the next 20 bytes as an array onto the stack."],["OP_PUSHBYTES_21","Push the next 21 bytes as an array onto the stack."],["OP_PUSHBYTES_22","Push the next 22 bytes as an array onto the stack."],["OP_PUSHBYTES_23","Push the next 23 bytes as an array onto the stack."],["OP_PUSHBYTES_24","Push the next 24 bytes as an array onto the stack."],["OP_PUSHBYTES_25","Push the next 25 bytes as an array onto the stack."],["OP_PUSHBYTES_26","Push the next 26 bytes as an array onto the stack."],["OP_PUSHBYTES_27","Push the next 27 bytes as an array onto the stack."],["OP_PUSHBYTES_28","Push the next 28 bytes as an array onto the stack."],["OP_PUSHBYTES_29","Push the next 29 bytes as an array onto the stack."],["OP_PUSHBYTES_3","Push the next 2 bytes as an array onto the stack."],["OP_PUSHBYTES_30","Push the next 30 bytes as an array onto the stack."],["OP_PUSHBYTES_31","Push the next 31 bytes as an array onto the stack."],["OP_PUSHBYTES_32","Push the next 32 bytes as an array onto the stack."],["OP_PUSHBYTES_33","Push the next 33 bytes as an array onto the stack."],["OP_PUSHBYTES_34","Push the next 34 bytes as an array onto the stack."],["OP_PUSHBYTES_35","Push the next 35 bytes as an array onto the stack."],["OP_PUSHBYTES_36","Push the next 36 bytes as an array onto the stack."],["OP_PUSHBYTES_37","Push the next 37 bytes as an array onto the stack."],["OP_PUSHBYTES_38","Push the next 38 bytes as an array onto the stack."],["OP_PUSHBYTES_39","Push the next 39 bytes as an array onto the stack."],["OP_PUSHBYTES_4","Push the next 4 bytes as an array onto the stack."],["OP_PUSHBYTES_40","Push the next 40 bytes as an array onto the stack."],["OP_PUSHBYTES_41","Push the next 41 bytes as an array onto the stack."],["OP_PUSHBYTES_42","Push the next 42 bytes as an array onto the stack."],["OP_PUSHBYTES_43","Push the next 43 bytes as an array onto the stack."],["OP_PUSHBYTES_44","Push the next 44 bytes as an array onto the stack."],["OP_PUSHBYTES_45","Push the next 45 bytes as an array onto the stack."],["OP_PUSHBYTES_46","Push the next 46 bytes as an array onto the stack."],["OP_PUSHBYTES_47","Push the next 47 bytes as an array onto the stack."],["OP_PUSHBYTES_48","Push the next 48 bytes as an array onto the stack."],["OP_PUSHBYTES_49","Push the next 49 bytes as an array onto the stack."],["OP_PUSHBYTES_5","Push the next 5 bytes as an array onto the stack."],["OP_PUSHBYTES_50","Push the next 50 bytes as an array onto the stack."],["OP_PUSHBYTES_51","Push the next 51 bytes as an array onto the stack."],["OP_PUSHBYTES_52","Push the next 52 bytes as an array onto the stack."],["OP_PUSHBYTES_53","Push the next 53 bytes as an array onto the stack."],["OP_PUSHBYTES_54","Push the next 54 bytes as an array onto the stack."],["OP_PUSHBYTES_55","Push the next 55 bytes as an array onto the stack."],["OP_PUSHBYTES_56","Push the next 56 bytes as an array onto the stack."],["OP_PUSHBYTES_57","Push the next 57 bytes as an array onto the stack."],["OP_PUSHBYTES_58","Push the next 58 bytes as an array onto the stack."],["OP_PUSHBYTES_59","Push the next 59 bytes as an array onto the stack."],["OP_PUSHBYTES_6","Push the next 6 bytes as an array onto the stack."],["OP_PUSHBYTES_60","Push the next 60 bytes as an array onto the stack."],["OP_PUSHBYTES_61","Push the next 61 bytes as an array onto the stack."],["OP_PUSHBYTES_62","Push the next 62 bytes as an array onto the stack."],["OP_PUSHBYTES_63","Push the next 63 bytes as an array onto the stack."],["OP_PUSHBYTES_64","Push the next 64 bytes as an array onto the stack."],["OP_PUSHBYTES_65","Push the next 65 bytes as an array onto the stack."],["OP_PUSHBYTES_66","Push the next 66 bytes as an array onto the stack."],["OP_PUSHBYTES_67","Push the next 67 bytes as an array onto the stack."],["OP_PUSHBYTES_68","Push the next 68 bytes as an array onto the stack."],["OP_PUSHBYTES_69","Push the next 69 bytes as an array onto the stack."],["OP_PUSHBYTES_7","Push the next 7 bytes as an array onto the stack."],["OP_PUSHBYTES_70","Push the next 70 bytes as an array onto the stack."],["OP_PUSHBYTES_71","Push the next 71 bytes as an array onto the stack."],["OP_PUSHBYTES_72","Push the next 72 bytes as an array onto the stack."],["OP_PUSHBYTES_73","Push the next 73 bytes as an array onto the stack."],["OP_PUSHBYTES_74","Push the next 74 bytes as an array onto the stack."],["OP_PUSHBYTES_75","Push the next 75 bytes as an array onto the stack."],["OP_PUSHBYTES_8","Push the next 8 bytes as an array onto the stack."],["OP_PUSHBYTES_9","Push the next 9 bytes as an array onto the stack."],["OP_PUSHDATA1","Read the next byte as N; push the next N bytes as an array onto the stack."],["OP_PUSHDATA2","Read the next 2 bytes as N; push the next N bytes as an array onto the stack."],["OP_PUSHDATA4","Read the next 4 bytes as N; push the next N bytes as an array onto the stack."],["OP_PUSHNUM_1","Push the array `0x01` onto the stack."],["OP_PUSHNUM_10","Push the array `0x0a` onto the stack."],["OP_PUSHNUM_11","Push the array `0x0b` onto the stack."],["OP_PUSHNUM_12","Push the array `0x0c` onto the stack."],["OP_PUSHNUM_13","Push the array `0x0d` onto the stack."],["OP_PUSHNUM_14","Push the array `0x0e` onto the stack."],["OP_PUSHNUM_15","Push the array `0x0f` onto the stack."],["OP_PUSHNUM_16","Push the array `0x10` onto the stack."],["OP_PUSHNUM_2","Push the array `0x02` onto the stack."],["OP_PUSHNUM_3","Push the array `0x03` onto the stack."],["OP_PUSHNUM_4","Push the array `0x04` onto the stack."],["OP_PUSHNUM_5","Push the array `0x05` onto the stack."],["OP_PUSHNUM_6","Push the array `0x06` onto the stack."],["OP_PUSHNUM_7","Push the array `0x07` onto the stack."],["OP_PUSHNUM_8","Push the array `0x08` onto the stack."],["OP_PUSHNUM_9","Push the array `0x09` onto the stack."],["OP_PUSHNUM_NEG1","Push the array `0x81` onto the stack."],["OP_RESERVED","Synonym for OP_RETURN."],["OP_RESERVED1","Synonym for OP_RETURN."],["OP_RESERVED2","Synonym for OP_RETURN."],["OP_RETURN","Fail the script immediately. (Must be executed.)."],["OP_RETURN_187","Synonym for OP_RETURN."],["OP_RETURN_188","Synonym for OP_RETURN."],["OP_RETURN_189","Synonym for OP_RETURN."],["OP_RETURN_190","Synonym for OP_RETURN."],["OP_RETURN_191","Synonym for OP_RETURN."],["OP_RETURN_192","Synonym for OP_RETURN."],["OP_RETURN_193","Synonym for OP_RETURN."],["OP_RETURN_194","Synonym for OP_RETURN."],["OP_RETURN_195","Synonym for OP_RETURN."],["OP_RETURN_196","Synonym for OP_RETURN."],["OP_RETURN_197","Synonym for OP_RETURN."],["OP_RETURN_198","Synonym for OP_RETURN."],["OP_RETURN_199","Synonym for OP_RETURN."],["OP_RETURN_200","Synonym for OP_RETURN."],["OP_RETURN_201","Synonym for OP_RETURN."],["OP_RETURN_202","Synonym for OP_RETURN."],["OP_RETURN_203","Synonym for OP_RETURN."],["OP_RETURN_204","Synonym for OP_RETURN."],["OP_RETURN_205","Synonym for OP_RETURN."],["OP_RETURN_206","Synonym for OP_RETURN."],["OP_RETURN_207","Synonym for OP_RETURN."],["OP_RETURN_208","Synonym for OP_RETURN."],["OP_RETURN_209","Synonym for OP_RETURN."],["OP_RETURN_210","Synonym for OP_RETURN."],["OP_RETURN_211","Synonym for OP_RETURN."],["OP_RETURN_212","Synonym for OP_RETURN."],["OP_RETURN_213","Synonym for OP_RETURN."],["OP_RETURN_214","Synonym for OP_RETURN."],["OP_RETURN_215","Synonym for OP_RETURN."],["OP_RETURN_216","Synonym for OP_RETURN."],["OP_RETURN_217","Synonym for OP_RETURN."],["OP_RETURN_218","Synonym for OP_RETURN."],["OP_RETURN_219","Synonym for OP_RETURN."],["OP_RETURN_220","Synonym for OP_RETURN."],["OP_RETURN_221","Synonym for OP_RETURN."],["OP_RETURN_222","Synonym for OP_RETURN."],["OP_RETURN_223","Synonym for OP_RETURN."],["OP_RETURN_224","Synonym for OP_RETURN."],["OP_RETURN_225","Synonym for OP_RETURN."],["OP_RETURN_226","Synonym for OP_RETURN."],["OP_RETURN_227","Synonym for OP_RETURN."],["OP_RETURN_228","Synonym for OP_RETURN."],["OP_RETURN_229","Synonym for OP_RETURN."],["OP_RETURN_230","Synonym for OP_RETURN."],["OP_RETURN_231","Synonym for OP_RETURN."],["OP_RETURN_232","Synonym for OP_RETURN."],["OP_RETURN_233","Synonym for OP_RETURN."],["OP_RETURN_234","Synonym for OP_RETURN."],["OP_RETURN_235","Synonym for OP_RETURN."],["OP_RETURN_236","Synonym for OP_RETURN."],["OP_RETURN_237","Synonym for OP_RETURN."],["OP_RETURN_238","Synonym for OP_RETURN."],["OP_RETURN_239","Synonym for OP_RETURN."],["OP_RETURN_240","Synonym for OP_RETURN."],["OP_RETURN_241","Synonym for OP_RETURN."],["OP_RETURN_242","Synonym for OP_RETURN."],["OP_RETURN_243","Synonym for OP_RETURN."],["OP_RETURN_244","Synonym for OP_RETURN."],["OP_RETURN_245","Synonym for OP_RETURN."],["OP_RETURN_246","Synonym for OP_RETURN."],["OP_RETURN_247","Synonym for OP_RETURN."],["OP_RETURN_248","Synonym for OP_RETURN."],["OP_RETURN_249","Synonym for OP_RETURN."],["OP_RETURN_250","Synonym for OP_RETURN."],["OP_RETURN_251","Synonym for OP_RETURN."],["OP_RETURN_252","Synonym for OP_RETURN."],["OP_RETURN_253","Synonym for OP_RETURN."],["OP_RETURN_254","Synonym for OP_RETURN."],["OP_RIGHT","Fail the script unconditionally, does not even need to be executed."],["OP_RIPEMD160","Pop the top stack item and push its RIPEMD160 hash."],["OP_ROLL","Pop the top stack element as N. Move the Nth stack element to the top."],["OP_ROT","Rotate the top three stack items, as [top next1 next2] -> [next2 top next1]."],["OP_RSHIFT","Fail the script unconditionally, does not even need to be executed."],["OP_SHA1","Pop the top stack item and push its SHA1 hash."],["OP_SHA256","Pop the top stack item and push its SHA256 hash."],["OP_SIZE","Pushes the length of the top stack item onto the stack."],["OP_SUB","Pop two stack items and push the second minus the top."],["OP_SUBSTR","Fail the script unconditionally, does not even need to be executed."],["OP_SWAP","Swap the top two stack items."],["OP_TOALTSTACK","Pop one element from the main stack onto the alt stack."],["OP_TUCK","Copy the top stack item to before the second item, as [top next] -> [top next top]."],["OP_VER","Synonym for OP_RETURN."],["OP_VERIF","Fail the script unconditionally, does not even need to be executed."],["OP_VERIFY","If the top value is zero or the stack is empty, fail; otherwise, pop the stack."],["OP_VERNOTIF","Fail the script unconditionally, does not even need to be executed."],["OP_WITHIN","Pop the top three items; if the top is >= the second and < the third, push 1, otherwise push 0."],["OP_XOR","Fail the script unconditionally, does not even need to be executed."]]};