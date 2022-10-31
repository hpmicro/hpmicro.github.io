var group__sdp__interface =
[
    [ "sdp_aes_ctx_t", "structsdp__aes__ctx__t.html", [
      [ "buf0", "structsdp__aes__ctx__t.html#ababd5c2bb81feb701a3f32f5ae98128c", null ],
      [ "buf1", "structsdp__aes__ctx__t.html#a1bab1414486eafefe2562fdce6800d27", null ],
      [ "buf2", "structsdp__aes__ctx__t.html#a65dd9b151e41299a8fb0a907df45f90c", null ],
      [ "buf3", "structsdp__aes__ctx__t.html#af47f490f97bd4393adf931e138b3e598", null ],
      [ "key_bits", "structsdp__aes__ctx__t.html#a5ee34124902562334f72bfb347218dbb", null ],
      [ "key_idx", "structsdp__aes__ctx__t.html#a192230e4ae2a01e9a9f8ddc089bcfb10", null ],
      [ "reserved", "structsdp__aes__ctx__t.html#a8ac0f4e3c00071906f0185260782f6a3", null ],
      [ "sdp_pkt", "structsdp__aes__ctx__t.html#a69514c81d5ee70d27aa8f9666dd8b82a", null ]
    ] ],
    [ "sdp_dma_ctx_t", "structsdp__dma__ctx__t.html", [
      [ "sdp_pkt", "structsdp__dma__ctx__t.html#ab47ab8c708542b3331e180ea5ee4424c", null ]
    ] ],
    [ "sdp_hash_ctx_t", "structsdp__hash__ctx__t.html", [
      [ "internal", "structsdp__hash__ctx__t.html#aedfe17c78ecf8f15ea8d86e74af52665", null ],
      [ "sdp_pkt", "structsdp__hash__ctx__t.html#a2880a289fccbf81b99db891a3515a6a0", null ]
    ] ],
    [ "AES_128_KEY_SIZE", "group__sdp__interface.html#gaf0c555c508d898596911c3b7ec01fe74", null ],
    [ "AES_256_KEY_SIZE", "group__sdp__interface.html#gaf503c3f340dbc2edc8134997943456d0", null ],
    [ "AES_BLOCK_SIZE", "group__sdp__interface.html#gaf19ab913a847ad1e91c5291215116de1", null ],
    [ "HASH_BLOCK_SIZE", "group__sdp__interface.html#ga7b65d39b4e3e3b991ad75149530595a9", null ],
    [ "SDP_PKT_CTRL_CHAIN_MASK", "group__sdp__interface.html#ga71a87425d71b51399de6995e9ba4872d", null ],
    [ "SDP_PKT_CTRL_CIPHIV_MASK", "group__sdp__interface.html#ga5606cd14ab32a74f06fe204b3dba5094", null ],
    [ "SDP_PKT_CTRL_DERSEMA_MASK", "group__sdp__interface.html#gac27e0b37d01ea11ec337a0ae6e0e63ef", null ],
    [ "SDP_PKT_CTRL_HASHFINISH_MASK", "group__sdp__interface.html#ga484e51b4454437c30a7cd5f7b1814479", null ],
    [ "SDP_PKT_CTRL_HASHINIT_MASK", "group__sdp__interface.html#gad6ef9125058efa497a90f0528dff9c0b", null ],
    [ "sdp_pkt_struct_t", "group__sdp__interface.html#ga6e5749a1f05b23675ef9e38b5cb5b32b", [
      [ "status_sdp_no_crypto_support", "group__sdp__interface.html#ggaa94c5fdcac6a4b26211b612c3edc04ffa88a6c197706c3bd6021fa821538fd795", null ],
      [ "status_sdp_no_hash_support", "group__sdp__interface.html#ggaa94c5fdcac6a4b26211b612c3edc04ffaca714ff069ddf2fb6495c0334b2080e8", null ],
      [ "status_sdp_invalid_key_src", "group__sdp__interface.html#ggaa94c5fdcac6a4b26211b612c3edc04ffa9a3e2eab48bba0f26a028b1eeff21272", null ],
      [ "status_sdp_error_packet", "group__sdp__interface.html#ggaa94c5fdcac6a4b26211b612c3edc04ffa07ed2d58378d6363a843612f01fec33b", null ],
      [ "status_sdp_aes_busy", "group__sdp__interface.html#ggaa94c5fdcac6a4b26211b612c3edc04ffa44d444202b267effd64aae992cd0fc6b", null ],
      [ "status_sdp_hash_busy", "group__sdp__interface.html#ggaa94c5fdcac6a4b26211b612c3edc04ffab55a7aad193627315f91f4d84671fbe5", null ],
      [ "status_sdp_error_setup", "group__sdp__interface.html#ggaa94c5fdcac6a4b26211b612c3edc04ffa2f85949d00d24bd85b8955883dfd234a", null ],
      [ "status_sdp_error_src", "group__sdp__interface.html#ggaa94c5fdcac6a4b26211b612c3edc04ffa1637f39c05440ad308d9000293625226", null ],
      [ "status_sdp_error_dst", "group__sdp__interface.html#ggaa94c5fdcac6a4b26211b612c3edc04ffaf9f87e1f188c4edbe80bc7d89a2e8ee1", null ],
      [ "status_sdp_error_hash", "group__sdp__interface.html#ggaa94c5fdcac6a4b26211b612c3edc04ffa4c460f80cfebd73ebc25604caecafe72", null ],
      [ "status_sdp_error_chain", "group__sdp__interface.html#ggaa94c5fdcac6a4b26211b612c3edc04ffa915d1424baaac4045c3af2079f9d9cfc", null ],
      [ "status_sdp_error_invalid_mac", "group__sdp__interface.html#ggaa94c5fdcac6a4b26211b612c3edc04ffac7fcabcafec2fd9b8f01557b0b17156e", null ]
    ] ],
    [ "sdp_aes_key_bits_t", "group__sdp__interface.html#ga2be8451337c59a93a6958f16e0bbff19", [
      [ "sdp_aes_keybits_128", "group__sdp__interface.html#gga2be8451337c59a93a6958f16e0bbff19aebe4bfb1cda63ea891f5f7579de1af18", null ],
      [ "sdp_aes_keybits_256", "group__sdp__interface.html#gga2be8451337c59a93a6958f16e0bbff19acc0a0a6b57ff24014bb631875c31258c", null ]
    ] ],
    [ "sdp_aes_op_t", "group__sdp__interface.html#gadf418a7dbaed400fff128559f3252018", [
      [ "sdp_aes_op_encrypt", "group__sdp__interface.html#ggadf418a7dbaed400fff128559f3252018a3117fa24931bd0cd1d52ea73182749ec", null ],
      [ "sdp_aes_op_decrypt", "group__sdp__interface.html#ggadf418a7dbaed400fff128559f3252018acc4dd81a9bfb05c0533ca744dcb3de37", null ]
    ] ],
    [ "sdp_hash_alg_t", "group__sdp__interface.html#gaab2a0c515a472eef8c7e5cb4f1d7eee4", [
      [ "sdp_hash_alg_sha1", "group__sdp__interface.html#ggaab2a0c515a472eef8c7e5cb4f1d7eee4a1725eff06fca130610b9b10f13ee7d87", null ],
      [ "sdp_hash_alg_crc32", "group__sdp__interface.html#ggaab2a0c515a472eef8c7e5cb4f1d7eee4a6152490ad2bc6db8a17330037f06c5ba", null ],
      [ "sdp_hash_alg_sha256", "group__sdp__interface.html#ggaab2a0c515a472eef8c7e5cb4f1d7eee4afdf9e228ace7d6319e77350eae0ef609", null ],
      [ "sdp_hash_alg_max", "group__sdp__interface.html#ggaab2a0c515a472eef8c7e5cb4f1d7eee4aa80c1ddacfea8b290f8dd20f79868a6e", null ]
    ] ],
    [ "sdp_aes_ccm_decrypt_verify", "group__sdp__interface.html#ga489ecaa21d6ef7959d1c54035f1ab9ae", null ],
    [ "sdp_aes_ccm_generate_encrypt", "group__sdp__interface.html#ga4dfba82c7a94c09311819bc8f1e009df", null ],
    [ "sdp_aes_crypt_cbc", "group__sdp__interface.html#gaf0cc771c288306509b24a650917283a4", null ],
    [ "sdp_aes_crypt_ctr", "group__sdp__interface.html#gade0b1187a0b53baafc71efd07b3995c6", null ],
    [ "sdp_aes_crypt_ecb", "group__sdp__interface.html#gabb01a7313079b4d535fe1fdeb0de76cb", null ],
    [ "sdp_aes_set_key", "group__sdp__interface.html#ga46df53ae0c3e88655999f5e5e398d52a", null ],
    [ "sdp_deinit", "group__sdp__interface.html#ga4d5276bc1c826ea3dc3ab130836c6afd", null ],
    [ "sdp_hash_finish", "group__sdp__interface.html#ga112d4ab7ac0cfba065169b2ef44c49a6", null ],
    [ "sdp_hash_init", "group__sdp__interface.html#gaddc624a4f1b3e898166eb8840ddba5de", null ],
    [ "sdp_hash_update", "group__sdp__interface.html#ga3eca6af1fced0bab36655bd42d237a4a", null ],
    [ "sdp_init", "group__sdp__interface.html#ga4315481c2f0a798f3f55a3547c6f280b", null ],
    [ "sdp_memcpy", "group__sdp__interface.html#ga54cb70aa4500002c9f0d2f98b97ef121", null ],
    [ "sdp_memset", "group__sdp__interface.html#ga6afd14bee029f2a1857529f314cf80b6", null ],
    [ "sdp_wait_done", "group__sdp__interface.html#ga8ef05d86de822df8b6e64e5ca100b2dc", null ]
];