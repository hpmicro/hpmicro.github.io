var group__spi__interface =
[
    [ "spi_master_timing_config_t", "structspi__master__timing__config__t.html", [
      [ "clk_src_freq_in_hz", "structspi__master__timing__config__t.html#afa1613eb9c5cdef9fdb57eb337c83f8c", null ],
      [ "cs2sclk", "structspi__master__timing__config__t.html#af96ea528f3b57794c7e8432de7ef5c73", null ],
      [ "csht", "structspi__master__timing__config__t.html#ab0423d7034f7fa474079de79cdd0adec", null ],
      [ "sclk_freq_in_hz", "structspi__master__timing__config__t.html#a27234dc0ee0c0709adb8e03a256e75ba", null ]
    ] ],
    [ "spi_timing_config_t", "structspi__timing__config__t.html", [
      [ "master_config", "structspi__timing__config__t.html#a90ac9374c633e5f77596962520300859", null ]
    ] ],
    [ "spi_master_format_config_t", "structspi__master__format__config__t.html", [
      [ "addr_len_in_bytes", "structspi__master__format__config__t.html#a6e520a2ad02d36c9a533668c513ac05a", null ]
    ] ],
    [ "spi_common_format_config_t", "structspi__common__format__config__t.html", [
      [ "cpha", "structspi__common__format__config__t.html#a7c701dd9caff9d37a414909ef2f64371", null ],
      [ "cpol", "structspi__common__format__config__t.html#a4551ed3258f8e414898d0b1ec1874235", null ],
      [ "data_len_in_bits", "structspi__common__format__config__t.html#ae673051b9503727c7392cec1c437480c", null ],
      [ "data_merge", "structspi__common__format__config__t.html#ae9fb042cafeced22e81d78bd7c2bfebb", null ],
      [ "lsb", "structspi__common__format__config__t.html#a7fee1be394be1d9bea6aec710eb1c71f", null ],
      [ "mode", "structspi__common__format__config__t.html#a44e71a391681bdbb23de871329563220", null ],
      [ "mosi_bidir", "structspi__common__format__config__t.html#addace38f33b9d2d11b9de77e3bd11a7f", null ]
    ] ],
    [ "spi_format_config_t", "structspi__format__config__t.html", [
      [ "common_config", "structspi__format__config__t.html#aca68f5f5e29c87ed38b57f36b4ca77e3", null ],
      [ "master_config", "structspi__format__config__t.html#a848dc52df304d08430857d4939fcad80", null ]
    ] ],
    [ "spi_master_control_config_t", "structspi__master__control__config__t.html", [
      [ "addr_enable", "structspi__master__control__config__t.html#aa8641b8bfbac0c872484fa3829813b7b", null ],
      [ "addr_phase_fmt", "structspi__master__control__config__t.html#aa263aec2665ba9d6552e208d42799076", null ],
      [ "cmd_enable", "structspi__master__control__config__t.html#ae2ea18d885fd14920b6f3a81cd07887a", null ],
      [ "token_enable", "structspi__master__control__config__t.html#aa456a1182d9e6f932f976f8fdb0fb790", null ],
      [ "token_value", "structspi__master__control__config__t.html#a6d83382bee82065905fcd0c6c36bb206", null ]
    ] ],
    [ "spi_slave_control_config_t", "structspi__slave__control__config__t.html", [
      [ "slave_data_only", "structspi__slave__control__config__t.html#aac4b171e5eadbd515b19a90b5576d0c8", null ]
    ] ],
    [ "spi_common_control_config_t", "structspi__common__control__config__t.html", [
      [ "data_phase_fmt", "structspi__common__control__config__t.html#ade270abbbcfe0810b2a0edd85cdd4233", null ],
      [ "dummy_cnt", "structspi__common__control__config__t.html#a40f2304b0b01eee4236eb79150252eb8", null ],
      [ "rx_dma_enable", "structspi__common__control__config__t.html#ad39ae05df043d04e21bddb8af976bf4e", null ],
      [ "trans_mode", "structspi__common__control__config__t.html#adfca7e744e0d44634d9b38f7be284058", null ],
      [ "tx_dma_enable", "structspi__common__control__config__t.html#a956b1e54e7c59f53b56c69140f5d4571", null ]
    ] ],
    [ "spi_control_config_t", "structspi__control__config__t.html", [
      [ "common_config", "structspi__control__config__t.html#ad808dc64b56fca1e62005aaaf8618b70", null ],
      [ "master_config", "structspi__control__config__t.html#a96cd87a49bfc5810ea771c8fbb310cde", null ],
      [ "slave_config", "structspi__control__config__t.html#a74fadddc760f616fbfad225fbfc4dbc5", null ]
    ] ],
    [ "spi_addr_phase_format_t", "group__spi__interface.html#ga005ab1f2922a495cd72705c4f97806ef", [
      [ "spi_address_phase_format_single_io_mode", "group__spi__interface.html#gga005ab1f2922a495cd72705c4f97806efa190261bcad9b03c22a05c9d44ed4225b", null ],
      [ "spi_address_phase_format_dualquad_io_mode", "group__spi__interface.html#gga005ab1f2922a495cd72705c4f97806efaf81060a0bf7cf5a3800f0180b8d69ccb", null ]
    ] ],
    [ "spi_cs2sclk_duration_t", "group__spi__interface.html#ga33e343fc2876a4886bcd808046ba8ebe", [
      [ "spi_cs2sclk_half_sclk_1", "group__spi__interface.html#gga33e343fc2876a4886bcd808046ba8ebeaf94ebaa71709afd9f6f4c3445227a729", null ],
      [ "spi_cs2sclk_half_sclk_2", "group__spi__interface.html#gga33e343fc2876a4886bcd808046ba8ebeac2b418b2429a6cc534e3ba11f2d0c36c", null ],
      [ "spi_cs2sclk_half_sclk_3", "group__spi__interface.html#gga33e343fc2876a4886bcd808046ba8ebea312a681b7bb0692606448ca9528ed793", null ],
      [ "spi_cs2sclk_half_sclk_4", "group__spi__interface.html#gga33e343fc2876a4886bcd808046ba8ebeaa1f01e9f9e4ee1f26da466705433c8a3", null ]
    ] ],
    [ "spi_csht_duration_t", "group__spi__interface.html#ga410142b39b47da0d68fa76b42aa7e030", [
      [ "spi_csht_half_sclk_1", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030abd82a7856f4955ffa1cefbb2ff293fb3", null ],
      [ "spi_csht_half_sclk_2", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030a773dad60833d9f40f6769c51d7e73bea", null ],
      [ "spi_csht_half_sclk_3", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030a4cd196bb27440ad5ae065225a9da51f5", null ],
      [ "spi_csht_half_sclk_4", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030ae724ef94bfcb549f811fcf1b6ebdb844", null ],
      [ "spi_csht_half_sclk_5", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030adba4fdcf211cee3d9b7cd4d46b9b6d2e", null ],
      [ "spi_csht_half_sclk_6", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030ac143308845fb6a002ee6acd02045714c", null ],
      [ "spi_csht_half_sclk_7", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030a1979cd9f44e66499a4c3097bedfeab34", null ],
      [ "spi_csht_half_sclk_8", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030abab095143d449401f5d492a13e16fde7", null ],
      [ "spi_csht_half_sclk_9", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030a958920e56d23246f39cf0dcf99084148", null ],
      [ "spi_csht_half_sclk_10", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030aa0a04e8ff6835c991494327b2fe9d248", null ],
      [ "spi_csht_half_sclk_11", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030a81472251e57b6b3abf105989a14e3988", null ],
      [ "spi_csht_half_sclk_12", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030a20e9ad1c6d82de9ab4fec35958997b58", null ],
      [ "spi_csht_half_sclk_13", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030a4022b88297a903dcc85c6ad51f54555e", null ],
      [ "spi_csht_half_sclk_14", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030a74fdc26e3f64e8a6ea084de94b3435b1", null ],
      [ "spi_csht_half_sclk_15", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030aa918aacc182608444255e0da7eceec89", null ],
      [ "spi_csht_half_sclk_16", "group__spi__interface.html#gga410142b39b47da0d68fa76b42aa7e030a2ecf0f75bcca14605b7cfb7b265bfbee", null ]
    ] ],
    [ "spi_data_phase_format_t", "group__spi__interface.html#gafff636ea73cfd28e417690fcfcacc5f9", [
      [ "spi_single_io_mode", "group__spi__interface.html#ggafff636ea73cfd28e417690fcfcacc5f9afa1be05243c70c676721e8d938096115", null ],
      [ "spi_dual_io_mode", "group__spi__interface.html#ggafff636ea73cfd28e417690fcfcacc5f9af1e1ca2d0ebd45c2305977fe8d060938", null ],
      [ "spi_quad_io_mode", "group__spi__interface.html#ggafff636ea73cfd28e417690fcfcacc5f9a179a6b44f520254c8220f027c3035dcb", null ]
    ] ],
    [ "spi_dummy_count_t", "group__spi__interface.html#gac15a19c9674d3a82d5cd58bfbe9096ba", [
      [ "spi_dummy_count_1", "group__spi__interface.html#ggac15a19c9674d3a82d5cd58bfbe9096baa9a79496f619dc35cf573304b23daeb7c", null ],
      [ "spi_dummy_count_2", "group__spi__interface.html#ggac15a19c9674d3a82d5cd58bfbe9096baa76e0518b9444026b754f14565b008c30", null ],
      [ "spi_dummy_count_3", "group__spi__interface.html#ggac15a19c9674d3a82d5cd58bfbe9096baa1c49d9467b2c767d5020f07c157f0b05", null ],
      [ "spi_dummy_count_4", "group__spi__interface.html#ggac15a19c9674d3a82d5cd58bfbe9096baacf582dc4728f105408f70ff5ba747755", null ]
    ] ],
    [ "spi_mode_selection_t", "group__spi__interface.html#ga9ac2dd2dcd0b2c3b5fb1363eac489a3e", [
      [ "spi_master_mode", "group__spi__interface.html#gga9ac2dd2dcd0b2c3b5fb1363eac489a3eaa45f1c195fc0e4f77a6871bd3c72ad30", null ],
      [ "spi_slave_mode", "group__spi__interface.html#gga9ac2dd2dcd0b2c3b5fb1363eac489a3ea6d237dd86032fe3495c45320e9ba4afb", null ]
    ] ],
    [ "spi_sclk_idle_state_t", "group__spi__interface.html#gaa216e00c4ce27ab3897a36c72e617968", [
      [ "spi_sclk_low_idle", "group__spi__interface.html#ggaa216e00c4ce27ab3897a36c72e617968a6a05e63978b1c909f29fcd9e0afe2739", null ],
      [ "spi_sclk_high_idle", "group__spi__interface.html#ggaa216e00c4ce27ab3897a36c72e617968ab30339f1b568344b818345078b7a8d99", null ]
    ] ],
    [ "spi_sclk_sampling_clk_edges_t", "group__spi__interface.html#gab063d70616d6d55c73b01e9a1d2fb162", [
      [ "spi_sclk_sampling_odd_clk_edges", "group__spi__interface.html#ggab063d70616d6d55c73b01e9a1d2fb162adfa02e88e6f8e2e588681d72e7ec0740", null ],
      [ "spi_sclk_sampling_even_clk_edges", "group__spi__interface.html#ggab063d70616d6d55c73b01e9a1d2fb162aea2fabd92a138e8c88809d265a2d0408", null ]
    ] ],
    [ "spi_token_value_t", "group__spi__interface.html#gac0796b7f31e5676ab9e039b8dfa3b7f5", [
      [ "spi_token_value_0x00", "group__spi__interface.html#ggac0796b7f31e5676ab9e039b8dfa3b7f5a17a2324369c04c125198cf1e6bc32f18", null ],
      [ "spi_token_value_0x69", "group__spi__interface.html#ggac0796b7f31e5676ab9e039b8dfa3b7f5a3795ec4e8784940f64983927322a95b3", null ]
    ] ],
    [ "spi_trans_mode_t", "group__spi__interface.html#gae719b4eb51210f7a6878861fcb374d15", [
      [ "spi_trans_write_read_together", "group__spi__interface.html#ggae719b4eb51210f7a6878861fcb374d15ad2a478fbce4d16e6a53fda9d2a7d28a7", null ],
      [ "spi_trans_write_only", "group__spi__interface.html#ggae719b4eb51210f7a6878861fcb374d15a49d8050552ae2f123d9e5894d6d99c54", null ],
      [ "spi_trans_read_only", "group__spi__interface.html#ggae719b4eb51210f7a6878861fcb374d15a20a6bb5cff8d394455e770ab0f73c4b4", null ],
      [ "spi_trans_write_read", "group__spi__interface.html#ggae719b4eb51210f7a6878861fcb374d15a65f770f7ab912d205a692621390ff981", null ],
      [ "spi_trans_read_write", "group__spi__interface.html#ggae719b4eb51210f7a6878861fcb374d15a77520f7f2577b7e360fcae729d557ebb", null ],
      [ "spi_trans_write_dummy_read", "group__spi__interface.html#ggae719b4eb51210f7a6878861fcb374d15a427d193ff9c71ad266027b15c6ea8033", null ],
      [ "spi_trans_read_dummy_write", "group__spi__interface.html#ggae719b4eb51210f7a6878861fcb374d15a978ff206dd41af49c7e973a1277a6e61", null ],
      [ "spi_trans_no_data", "group__spi__interface.html#ggae719b4eb51210f7a6878861fcb374d15aacc4a2b50914746ead941136d219909d", null ],
      [ "spi_trans_dummy_write", "group__spi__interface.html#ggae719b4eb51210f7a6878861fcb374d15a19c72838dd5f1436b0d12764565d1f23", null ],
      [ "spi_trans_dummy_read", "group__spi__interface.html#ggae719b4eb51210f7a6878861fcb374d15a938f0767762b6a2f353bb987314826c5", null ]
    ] ],
    [ "spi_format_init", "group__spi__interface.html#ga6aa789fed3d323a5cf9d541649a909ec", null ],
    [ "spi_master_get_default_control_config", "group__spi__interface.html#ga20fe4a9fd4254d69da5b3b5fa33f8f8c", null ],
    [ "spi_master_get_default_format_config", "group__spi__interface.html#ga31168318ca7a3f8145d6991412bffdb3", null ],
    [ "spi_master_get_default_timing_config", "group__spi__interface.html#ga3398ff3ef43abb865ba061fdac3922bd", null ],
    [ "spi_master_timing_init", "group__spi__interface.html#ga5f947eba318d5cf434442208fa013890", null ],
    [ "spi_setup_dma_transfer", "group__spi__interface.html#ga085530c65ea8efb8433c27a8346ca5dd", null ],
    [ "spi_slave_get_default_control_config", "group__spi__interface.html#ga011f364572dba586730f36c93f589557", null ],
    [ "spi_slave_get_default_format_config", "group__spi__interface.html#ga5a4c398026975ffff16080bdf1ba99f7", null ],
    [ "spi_transfer", "group__spi__interface.html#ga0806810be06ba3f20f573f7465c620ea", null ],
    [ "spi_wait_for_busy_status", "group__spi__interface.html#ga3292349e298ddb9f64819946afcea7d2", null ],
    [ "spi_wait_for_idle_status", "group__spi__interface.html#ga0bd47db6a31f4592c25b0b0ce4d26635", null ]
];