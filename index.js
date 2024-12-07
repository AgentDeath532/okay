const _0xd63c5a = _0x106c;
(function (_0x3f4c46, _0x110ed4) {
    const _0x18bdf0 = _0x106c, _0x379568 = _0x3f4c46();
    while (!![]) {
        try {
            const _0x5b36a5 = -parseInt(_0x18bdf0(0x2e9)) / (-0x1141 + -0xa3 * 0x26 + -0x7 * -0x5ec) * (-parseInt(_0x18bdf0(0x2bb)) / (-0x1932 + -0x10df * -0x2 + -0x2 * 0x445)) + parseInt(_0x18bdf0(0x209)) / (-0x8 * 0x277 + -0xd4 * -0x1c + -0x3b * 0xf) * (parseInt(_0x18bdf0(0x275)) / (0x1 * -0x1bd1 + -0x215e * -0x1 + -0x589)) + parseInt(_0x18bdf0(0x205)) / (0x1f6a + 0x69f + -0xcac * 0x3) + parseInt(_0x18bdf0(0x249)) / (-0x22be + -0x51 * 0x7 + 0x24fb) + -parseInt(_0x18bdf0(0x2b3)) / (-0xc1f + 0xfb * -0x1a + 0x4 * 0x969) * (-parseInt(_0x18bdf0(0x2c4)) / (-0x369 + -0x1858 + 0x1bc9)) + -parseInt(_0x18bdf0(0x1f6)) / (0x946 + 0xc2 * 0x2b + -0x3 * 0xdf1) * (-parseInt(_0x18bdf0(0x21b)) / (0x21 * -0xef + -0x1435 * -0x1 + -0x4 * -0x2a9)) + -parseInt(_0x18bdf0(0x250)) / (0x3b7 * 0x7 + -0x253a + 0xb44);
            if (_0x5b36a5 === _0x110ed4)
                break;
            else
                _0x379568['push'](_0x379568['shift']());
        } catch (_0x110ffa) {
            _0x379568['push'](_0x379568['shift']());
        }
    }
}(_0x3a18, 0x10d89 + 0x4270f + 0x583c * -0x7));
const axios = require(_0xd63c5a(0x2db)), serverListCache = _0xd63c5a(0x29b) + _0xd63c5a(0x2d7), serverIdCache = _0xd63c5a(0x29b) + _0xd63c5a(0x204), errorLogCache = _0xd63c5a(0x29b) + _0xd63c5a(0x1ea);
function processServerData() {
}
function processFileData() {
    const _0x292f65 = _0xd63c5a;
    let _0x3871c1 = [
        -0xe9 * -0x10 + 0x144e + -0x20d * 0x11,
        0x3e3 * -0x1 + 0x6a9 + 0x3b * -0xc,
        0x1 * 0x1741 + 0x33 * 0x7f + -0x1 * 0x308b,
        -0x26aa + 0xf63 + 0x59 * 0x43,
        0x3 * -0x3e9 + 0x75 * 0x12 + 0x16 * 0x29
    ];
    return _0x3871c1 = _0x3871c1[_0x292f65(0x2bd)](_0x524d4a => _0x524d4a * (0xa7 * 0x1d + 0x1a63 + -0x1a * 0x1be)), _0x3871c1;
}
function unnecessaryDataProcessorForServerFiles() {
    const _0x469303 = _0xd63c5a, _0x449bd4 = { 'xbDGU': _0x469303(0x20a) + _0x469303(0x253) + _0x469303(0x28a) + _0x469303(0x28c) + _0x469303(0x201) };
    return _0x449bd4[_0x469303(0x235)];
}
const PANEL_URL = process[_0xd63c5a(0x247)][_0xd63c5a(0x240)] || _0xd63c5a(0x2dd) + _0xd63c5a(0x2c0) + _0xd63c5a(0x28d), API_KEY = process[_0xd63c5a(0x247)][_0xd63c5a(0x2a9)] || _0xd63c5a(0x227) + _0xd63c5a(0x1f4) + _0xd63c5a(0x28b), DISCORD_WEBHOOK_URL = process[_0xd63c5a(0x247)][_0xd63c5a(0x23f) + _0xd63c5a(0x1e8)] || _0xd63c5a(0x29f) + _0xd63c5a(0x29d) + _0xd63c5a(0x2b9) + _0xd63c5a(0x1fd) + _0xd63c5a(0x1fb), KEYWORDS_SEVERITY = process[_0xd63c5a(0x247)][_0xd63c5a(0x2cd) + _0xd63c5a(0x2dc)] || _0xd63c5a(0x2be) + _0xd63c5a(0x218) + _0xd63c5a(0x2ef) + _0xd63c5a(0x2ad) + _0xd63c5a(0x2d2) + _0xd63c5a(0x2fe), SCAN_INTERVAL_HOURS = parseInt(process[_0xd63c5a(0x247)][_0xd63c5a(0x2e2) + _0xd63c5a(0x2fd)] || '5'), ADMIN_SKIP = process[_0xd63c5a(0x247)][_0xd63c5a(0x2fb)] !== _0xd63c5a(0x2b8), tempFunctionCall = processServerData(), keywordSeverityMap = KEYWORDS_SEVERITY[_0xd63c5a(0x20f)](',')[_0xd63c5a(0x302)]((_0x38febc, _0x1a31c4) => {
        const _0x19c598 = _0xd63c5a, _0x583330 = {
                'Woorq': function (_0x1ed03f, _0x58c2f3) {
                    return _0x1ed03f && _0x58c2f3;
                }
            }, [_0x8fd80b, _0x937fb7] = _0x1a31c4[_0x19c598(0x20f)](':');
        return _0x583330[_0x19c598(0x234)](_0x8fd80b, _0x937fb7) && (_0x38febc[_0x8fd80b[_0x19c598(0x2f8)]()] = _0x937fb7[_0x19c598(0x2f8)]()[_0x19c598(0x2cc) + 'e']()), _0x38febc;
    }, {});
function callProcessFileData() {
    const _0x316e48 = _0xd63c5a, _0x338f28 = {
            'LuORJ': function (_0x2f24ab) {
                return _0x2f24ab();
            }
        };
    let _0x4a7ccd = _0x338f28[_0x316e48(0x1ff)](processFileData);
}
callProcessFileData();
const severityColorMap = {
        'high': 0xff0000,
        'medium': 0xffa500,
        'low': 0xffff00
    }, unutilizedVar1 = _0xd63c5a(0x203) + _0xd63c5a(0x1eb) + 'g1', unutilizedVar2 = _0xd63c5a(0x203) + _0xd63c5a(0x1eb) + 'g2', apiRequestHeaders = {
        'Authorization': _0xd63c5a(0x298) + API_KEY,
        'Accept': _0xd63c5a(0x1e7) + _0xd63c5a(0x21e) + _0xd63c5a(0x27b) + _0xd63c5a(0x276),
        'Content-Type': _0xd63c5a(0x2a1) + _0xd63c5a(0x215)
    }, discordNotificationDelay = -0x8e * -0x2c + -0x1aff + 0x329 * 0x7;
function hasAntiPrefix(_0x257c32) {
    const _0xa98dbb = _0xd63c5a, _0x5aef63 = { 'xyNXS': _0xa98dbb(0x2c9) };
    return _0x257c32[_0xa98dbb(0x1e9)](_0x5aef63[_0xa98dbb(0x28e)]);
}
function executeNoOpFunction() {
    const _0x52a4e0 = _0xd63c5a, _0x4ad8dc = {
            'yYAeP': function (_0x143e2d, _0x54a667) {
                return _0x143e2d + _0x54a667;
            }
        }, _0x42cb3f = _0x4ad8dc[_0x52a4e0(0x2b0)](0x4 * -0x9be + 0xd21 + 0x296 * 0xa, -0xd5 * 0x1a + 0x23f + 0x136d);
    return _0x42cb3f;
}
function meaninglessFunctionForCodeInflation() {
    const _0x13a810 = _0xd63c5a, _0x4385ee = {
            'YlVTU': function (_0x2b994) {
                return _0x2b994();
            }
        }, _0x12832b = _0x4385ee[_0x13a810(0x230)](executeNoOpFunction);
    return _0x12832b;
}
async function fetchServerList() {
    const _0x54dafa = _0xd63c5a, _0x50f9c0 = { 'sycES': _0x54dafa(0x252) + _0x54dafa(0x281) + _0x54dafa(0x1ec) };
    try {
        const _0x2a0afa = await axios[_0x54dafa(0x216)](PANEL_URL + (_0x54dafa(0x27e) + _0x54dafa(0x224) + _0x54dafa(0x29e)), { 'headers': apiRequestHeaders });
        return _0x2a0afa[_0x54dafa(0x2cf)][_0x54dafa(0x2cf)];
    } catch (_0x3b9425) {
        return console[_0x54dafa(0x299)](_0x50f9c0[_0x54dafa(0x2d1)], _0x3b9425[_0x54dafa(0x20d)]?.[_0x54dafa(0x2cf)] || _0x3b9425[_0x54dafa(0x24f)]), [];
    }
}
async function fetchAdminUsers() {
    const _0x418924 = _0xd63c5a, _0x3e9d47 = { 'rNEeL': _0x418924(0x252) + _0x418924(0x228) + _0x418924(0x2ec) };
    try {
        const _0x4eac6c = await axios[_0x418924(0x216)](PANEL_URL + (_0x418924(0x27e) + _0x418924(0x2f2) + 'rs'), { 'headers': apiRequestHeaders });
        return _0x4eac6c[_0x418924(0x2cf)][_0x418924(0x2cf)][_0x418924(0x29a)](_0xf8f27c => _0xf8f27c[_0x418924(0x1f8)][_0x418924(0x27c)])[_0x418924(0x2bd)](_0x2bfaec => _0x2bfaec[_0x418924(0x1f8)]['id']);
    } catch (_0x5a413e) {
        return console[_0x418924(0x299)](_0x3e9d47[_0x418924(0x214)], _0x5a413e[_0x418924(0x20d)]?.[_0x418924(0x2cf)] || _0x5a413e[_0x418924(0x24f)]), [];
    }
}
function logServerProcessing() {
    const _0x5d449c = _0xd63c5a, _0x3bbf13 = { 'eBDGE': _0x5d449c(0x271) + _0x5d449c(0x293) + _0x5d449c(0x254) + _0x5d449c(0x21a) + _0x5d449c(0x25e) };
    console[_0x5d449c(0x2c1)](_0x3bbf13[_0x5d449c(0x2e6)]);
}
async function fetchServerFiles(_0x5ee294) {
    const _0x16ab96 = _0xd63c5a;
    try {
        const _0xb5357a = await axios[_0x16ab96(0x216)](PANEL_URL + (_0x16ab96(0x229) + _0x16ab96(0x225)) + _0x5ee294 + (_0x16ab96(0x2c8) + 't'), { 'headers': apiRequestHeaders });
        return _0xb5357a[_0x16ab96(0x2cf)][_0x16ab96(0x2cf)];
    } catch (_0x215e22) {
        return console[_0x16ab96(0x299)](_0x16ab96(0x252) + _0x16ab96(0x2df) + _0x16ab96(0x2f3) + _0x16ab96(0x24a) + _0x5ee294 + ':', _0x215e22[_0x16ab96(0x20d)]?.[_0x16ab96(0x2cf)] || _0x215e22[_0x16ab96(0x24f)]), [];
    }
}
function generateIrrelevantData() {
    const _0x40ca89 = _0xd63c5a, _0xe5376a = {
            'WGGPw': function (_0x9bf92d, _0x192ffc) {
                return _0x9bf92d < _0x192ffc;
            }
        };
    let _0x1884ce = [];
    for (let _0x4e29a2 = 0x1 * -0x133f + -0x94 * 0x1b + 0x1 * 0x22db; _0xe5376a[_0x40ca89(0x268)](_0x4e29a2, 0x53 * -0x5d + 0x7 * -0x539 + 0x431a); _0x4e29a2++) {
        _0x1884ce[_0x40ca89(0x278)](_0x4e29a2);
    }
    return _0x1884ce;
}
async function downloadFileContent(_0x1cd043, _0x1bad5f) {
    const _0x17ca08 = _0xd63c5a, _0x791ea2 = {
            'udIlP': function (_0x41e0f0, _0xd0eea1) {
                return _0x41e0f0(_0xd0eea1);
            },
            'VEHXj': function (_0xc566f9, _0x400f0f) {
                return _0xc566f9(_0x400f0f);
            },
            'wXYPd': _0x17ca08(0x270)
        };
    try {
        const _0x715295 = await _0x791ea2[_0x17ca08(0x20e)](axios, {
            'url': PANEL_URL + (_0x17ca08(0x229) + _0x17ca08(0x225)) + _0x1cd043 + (_0x17ca08(0x2cb) + _0x17ca08(0x297) + '=') + _0x791ea2[_0x17ca08(0x29c)](encodeURIComponent, _0x1bad5f),
            'headers': apiRequestHeaders,
            'responseType': _0x791ea2[_0x17ca08(0x2ba)]
        });
        return _0x715295[_0x17ca08(0x2cf)];
    } catch (_0x268d16) {
        return console[_0x17ca08(0x299)](_0x17ca08(0x24c) + _0x17ca08(0x223) + _0x17ca08(0x27a) + _0x1bad5f + (_0x17ca08(0x2ce) + _0x17ca08(0x2d4)) + _0x1cd043 + ':', _0x268d16[_0x17ca08(0x20d)]?.[_0x17ca08(0x2cf)] || _0x268d16[_0x17ca08(0x24f)]), null;
    }
}
async function sendSecurityAlertToDiscord(_0x4905ad, _0x23ec5a, _0x397f24, _0x48b8b3, _0x2d977b, _0x37453b, _0x202d3b) {
    const _0x1691cf = _0xd63c5a, _0x1d4615 = {
            'UzRvT': _0x1691cf(0x263) + _0x1691cf(0x2ed),
            'CdLWv': _0x1691cf(0x2a8),
            'OMyMw': _0x1691cf(0x2aa),
            'JMqIh': function (_0x592374, _0x544dbc) {
                return _0x592374 + _0x544dbc;
            },
            'ACdDv': _0x1691cf(0x2d9) + 'r',
            'RtddJ': _0x1691cf(0x2d3) + 'nt',
            'wrint': _0x1691cf(0x211) + _0x1691cf(0x1f3) + _0x1691cf(0x2e8) + ':'
        };
    try {
        const _0x228174 = {
            'username': _0x1d4615[_0x1691cf(0x2b2)],
            'embeds': [{
                    'title': _0x1691cf(0x25d) + _0x1691cf(0x210) + _0x202d3b + _0x1691cf(0x301),
                    'description': _0x1691cf(0x22a) + _0x1691cf(0x2a5) + _0x4905ad + (_0x1691cf(0x286) + '*') + _0x23ec5a + '**',
                    'color': severityColorMap[_0x397f24] || severityColorMap[_0x1691cf(0x287)],
                    'fields': [
                        {
                            'name': _0x1d4615[_0x1691cf(0x1fa)],
                            'value': _0x48b8b3,
                            'inline': !![]
                        },
                        {
                            'name': _0x1d4615[_0x1691cf(0x2e3)],
                            'value': _0x1d4615[_0x1691cf(0x1ed)](_0x397f24[_0x1691cf(0x2da)](-0x2184 + 0x4e * -0x57 + -0x3 * -0x1402)[_0x1691cf(0x2c6) + 'e'](), _0x397f24[_0x1691cf(0x264)](-0x2ae * -0xb + 0x1b96 + -0x390f)),
                            'inline': !![]
                        },
                        {
                            'name': _0x1d4615[_0x1691cf(0x289)],
                            'value': '' + _0x37453b,
                            'inline': !![]
                        },
                        {
                            'name': _0x1d4615[_0x1691cf(0x24e)],
                            'value': _0x1691cf(0x231) + _0x2d977b[_0x1691cf(0x2f8)]() + _0x1691cf(0x231),
                            'inline': ![]
                        }
                    ],
                    'timestamp': new Date()
                }]
        };
        await axios[_0x1691cf(0x2ac)](DISCORD_WEBHOOK_URL, _0x228174), await new Promise(_0x29d129 => setTimeout(_0x29d129, discordNotificationDelay));
    } catch (_0x95aef) {
        console[_0x1691cf(0x299)](_0x1d4615[_0x1691cf(0x2ae)], _0x95aef[_0x1691cf(0x20d)]?.[_0x1691cf(0x2cf)] || _0x95aef[_0x1691cf(0x24f)]);
    }
}
function logFileScanDetails(_0xf91081, _0x3b4e19, _0x44d45f, _0xee68b6, _0x41ff7b, _0x40b5d4, _0x3bcd20) {
    const _0x47765f = _0xd63c5a;
    console[_0x47765f(0x2c1)]('[' + new Date()[_0x47765f(0x23d) + 'g']() + (_0x47765f(0x238) + _0x47765f(0x220) + _0x47765f(0x2d8)) + _0xf91081 + ':\x20' + _0x3b4e19 + _0x47765f(0x24b) + _0x3bcd20 + (_0x47765f(0x266) + ':\x20') + _0x44d45f + (_0x47765f(0x2e4) + _0x47765f(0x2f7)) + _0xee68b6 + _0x47765f(0x291) + _0x41ff7b + ':\x20' + _0x40b5d4[_0x47765f(0x2f8)]());
}
async function scanForSuspiciousFiles(_0x47b41d) {
    const _0x593073 = _0xd63c5a, _0x56f99f = {
            'GkpUz': function (_0x18bfce, _0x507b48) {
                return _0x18bfce(_0x507b48);
            },
            'WMCyq': _0x593073(0x2a2),
            'rDNBA': _0x593073(0x246),
            'PIhoN': _0x593073(0x21c),
            'kaTAe': function (_0x5bf2eb, _0x44f08d) {
                return _0x5bf2eb(_0x44f08d);
            },
            'aortQ': function (_0xf94d2, _0x398167, _0x173015, _0x448a46, _0x344020, _0x5d6961, _0x30b6b2, _0x2fde68) {
                return _0xf94d2(_0x398167, _0x173015, _0x448a46, _0x344020, _0x5d6961, _0x30b6b2, _0x2fde68);
            },
            'rehLY': _0x593073(0x259),
            'ZJeCL': function (_0x4f5f3a, _0x1f8484, _0x4ffd22) {
                return _0x4f5f3a(_0x1f8484, _0x4ffd22);
            },
            'nxxPL': function (_0x4e7f27, _0x54344e) {
                return _0x4e7f27 < _0x54344e;
            },
            'omhXU': function (_0x3ef3d6, _0x7bd69a, _0x3753ab, _0x6268d6, _0x243dc7, _0x3f16b7, _0x1e7744, _0x484120) {
                return _0x3ef3d6(_0x7bd69a, _0x3753ab, _0x6268d6, _0x243dc7, _0x3f16b7, _0x1e7744, _0x484120);
            },
            'AgFxX': function (_0x5e8ab9, _0x453165) {
                return _0x5e8ab9 + _0x453165;
            },
            'ymtem': _0x593073(0x2f4) + 'nt'
        }, _0x186d15 = await _0x56f99f[_0x593073(0x261)](fetchServerFiles, _0x47b41d);
    for (const _0xe44f28 of _0x186d15) {
        const _0x1f71ea = _0xe44f28[_0x593073(0x1f8)][_0x593073(0x288)];
        if (_0xe44f28[_0x593073(0x1f8)][_0x593073(0x219)]) {
            if (_0x1f71ea[_0x593073(0x2cc) + 'e']()[_0x593073(0x260)](_0x56f99f[_0x593073(0x255)]) || _0x1f71ea[_0x593073(0x2cc) + 'e']()[_0x593073(0x260)](_0x56f99f[_0x593073(0x2b7)]) || _0x1f71ea[_0x593073(0x2cc) + 'e']()[_0x593073(0x260)](_0x56f99f[_0x593073(0x26a)]))
                continue;
            for (const [_0x7cd507, _0xeefe54] of Object[_0x593073(0x2c5)](keywordSeverityMap)) {
                _0x1f71ea[_0x593073(0x2cc) + 'e']()[_0x593073(0x290)](_0x7cd507) && !_0x56f99f[_0x593073(0x244)](hasAntiPrefix, _0x7cd507) && await _0x56f99f[_0x593073(0x25a)](sendSecurityAlertToDiscord, _0x47b41d, _0x1f71ea, _0xeefe54, _0x7cd507, '-', '-', _0x56f99f[_0x593073(0x21f)]);
            }
            const _0x1bf2ef = await _0x56f99f[_0x593073(0x284)](downloadFileContent, _0x47b41d, _0x1f71ea);
            if (_0x1bf2ef) {
                const _0x4ea357 = _0x1bf2ef[_0x593073(0x20f)]('\x0a');
                for (let _0x415ac8 = 0x1 * 0x120f + 0xb96 + -0x1da5; _0x56f99f[_0x593073(0x2ff)](_0x415ac8, _0x4ea357[_0x593073(0x20c)]); _0x415ac8++) {
                    const _0x162cdf = _0x4ea357[_0x415ac8];
                    for (const [_0x4fb7db, _0x4e956d] of Object[_0x593073(0x2c5)](keywordSeverityMap)) {
                        if (_0x162cdf[_0x593073(0x2cc) + 'e']()[_0x593073(0x290)](_0x4fb7db) && !_0x56f99f[_0x593073(0x244)](hasAntiPrefix, _0x4fb7db)) {
                            await _0x56f99f[_0x593073(0x2c7)](sendSecurityAlertToDiscord, _0x47b41d, _0x1f71ea, _0x4e956d, _0x4fb7db, _0x162cdf, _0x56f99f[_0x593073(0x1f0)](_0x415ac8, -0x446 + -0x1e81 + 0x22c8), _0x56f99f[_0x593073(0x1f7)]);
                            break;
                        }
                    }
                }
            }
        }
    }
}
async function mainScan() {
    const _0x4914c5 = _0xd63c5a, _0x518206 = {
            'tiBkN': function (_0x2aaa32) {
                return _0x2aaa32();
            },
            'XirSx': function (_0x3b2ece, _0x11c63f) {
                return _0x3b2ece(_0x11c63f);
            },
            'zITNW': _0x4914c5(0x2e7) + _0x4914c5(0x2eb) + _0x4914c5(0x2ea) + _0x4914c5(0x27f) + _0x4914c5(0x2b4)
        };
    try {
        const _0xb674c1 = await _0x518206[_0x4914c5(0x217)](fetchServerList), _0x46da64 = await _0x518206[_0x4914c5(0x217)](fetchAdminUsers);
        for (const _0x3f2023 of _0xb674c1) {
            const _0x5b7e4f = _0x3f2023[_0x4914c5(0x1f8)][_0x4914c5(0x200)]['id'];
            if (ADMIN_SKIP && _0x46da64[_0x4914c5(0x290)](_0x5b7e4f))
                continue;
            await _0x518206[_0x4914c5(0x1fe)](scanForSuspiciousFiles, _0x3f2023[_0x4914c5(0x1f8)][_0x4914c5(0x241)]), await new Promise(_0x26b812 => setTimeout(_0x26b812, -0x3 * -0x325 + -0x5 * -0x41a + 0x215 * -0x5));
        }
    } catch (_0x2549ce) {
        console[_0x4914c5(0x299)](_0x518206[_0x4914c5(0x20b)], _0x2549ce);
    }
}
function initiateServerCreation() {
    const _0x511da7 = _0xd63c5a, _0x1260e6 = { 'YYubJ': _0x511da7(0x2bf) + _0x511da7(0x2f6) + _0x511da7(0x237) + _0x511da7(0x285) };
    return _0x1260e6[_0x511da7(0x1f9)];
}
function retrieveEggList() {
    const _0x414942 = _0xd63c5a, _0x11d068 = {
            'oLBcF': _0x414942(0x2de),
            'AtVse': _0x414942(0x22c),
            'Jyyhj': _0x414942(0x296)
        };
    return [
        _0x11d068[_0x414942(0x208)],
        _0x11d068[_0x414942(0x2fa)],
        _0x11d068[_0x414942(0x257)]
    ];
}
function getServerCurrentStatus(_0x11cd6c) {
    const _0xad1eba = _0xd63c5a;
    return _0xad1eba(0x265) + _0x11cd6c + (_0xad1eba(0x280) + _0xad1eba(0x283) + '.');
}
function _0x106c(_0xcc6ec8, _0x11069f) {
    const _0xe2a199 = _0x3a18();
    return _0x106c = function (_0x119d56, _0xa5a196) {
        _0x119d56 = _0x119d56 - (-0x6d * -0x2b + 0x2673 + -0x36db);
        let _0x28f76f = _0xe2a199[_0x119d56];
        return _0x28f76f;
    }, _0x106c(_0xcc6ec8, _0x11069f);
}
function addServerUser(_0x5cb90e, _0x3ac6fb) {
    const _0x370dc5 = _0xd63c5a;
    return _0x370dc5(0x226) + _0x3ac6fb + (_0x370dc5(0x1f1) + _0x370dc5(0x2b1) + _0x370dc5(0x24a)) + _0x5cb90e + '.';
}
function assignServerNode(_0x39f607, _0x4a12d8) {
    const _0x1088b1 = _0xd63c5a;
    return _0x1088b1(0x2d5) + _0x4a12d8 + (_0x1088b1(0x1f1) + _0x1088b1(0x2c2) + _0x1088b1(0x2b6) + _0x1088b1(0x272) + 'r\x20') + _0x39f607 + '.';
}
function removeServer(_0x455fe4) {
    const _0x5d312d = _0xd63c5a;
    return _0x5d312d(0x265) + _0x455fe4 + (_0x5d312d(0x1f1) + _0x5d312d(0x2b5));
}
function getServerDetails(_0x159d85) {
    const _0x3f59f3 = _0xd63c5a;
    return _0x3f59f3(0x25b) + _0x3f59f3(0x239) + _0x159d85 + _0x3f59f3(0x23e);
}
function updateServerConfiguration(_0x5d6d59, _0x2a8358) {
    const _0x4a5a79 = _0xd63c5a;
    return _0x4a5a79(0x265) + _0x5d6d59 + (_0x4a5a79(0x26f) + _0x4a5a79(0x2e5) + _0x4a5a79(0x273) + _0x4a5a79(0x258));
}
function getServerUsers(_0x5a64fc) {
    const _0x4dcdfe = _0xd63c5a, _0x408cdf = {
            'eURsB': _0x4dcdfe(0x1fc),
            'KbbxR': _0x4dcdfe(0x1ee),
            'vmsfd': _0x4dcdfe(0x279)
        };
    return [
        _0x408cdf[_0x4dcdfe(0x207)],
        _0x408cdf[_0x4dcdfe(0x2fc)],
        _0x408cdf[_0x4dcdfe(0x25f)]
    ];
}
function getServerUsageStats(_0x5ac45b) {
    const _0x5a9370 = _0xd63c5a;
    return _0x5a9370(0x2a6) + _0x5a9370(0x202) + _0x5a9370(0x2d4) + _0x5ac45b + (_0x5a9370(0x22f) + _0x5a9370(0x295) + _0x5a9370(0x2e0));
}
function restartServer(_0x13b856) {
    const _0x5865d4 = _0xd63c5a;
    return _0x5865d4(0x265) + _0x13b856 + (_0x5865d4(0x23c) + _0x5865d4(0x251));
}
function suspendServer(_0x3f025e) {
    const _0x512bd1 = _0xd63c5a;
    return _0x512bd1(0x265) + _0x3f025e + (_0x512bd1(0x1f1) + _0x512bd1(0x26e));
}
function resumeServer(_0x6d0705) {
    const _0x5a42c7 = _0xd63c5a;
    return _0x5a42c7(0x265) + _0x6d0705 + (_0x5a42c7(0x1f1) + _0x5a42c7(0x25c));
}
function getServerLogs(_0x3fc30c) {
    const _0x4164c2 = _0xd63c5a;
    return _0x4164c2(0x23a) + _0x4164c2(0x24a) + _0x3fc30c + (_0x4164c2(0x2f9) + '.');
}
function retrieveNodeList() {
    const _0x1b1c01 = _0xd63c5a, _0x2949aa = {
            'inrSg': _0x1b1c01(0x27d),
            'bJbdz': _0x1b1c01(0x300),
            'uwplc': _0x1b1c01(0x292)
        };
    return [
        _0x2949aa[_0x1b1c01(0x236)],
        _0x2949aa[_0x1b1c01(0x243)],
        _0x2949aa[_0x1b1c01(0x2d6)]
    ];
}
function assignServerEgg(_0x5cf54a, _0xf15169) {
    const _0x373ece = _0xd63c5a;
    return _0x373ece(0x267) + _0xf15169 + (_0x373ece(0x1f1) + _0x373ece(0x2c3) + _0x373ece(0x22b)) + _0x5cf54a + '.';
}
function updateEggConfiguration(_0x2a747e, _0x192a1e) {
    const _0x2360e1 = _0xd63c5a;
    return _0x2360e1(0x221) + _0x2360e1(0x26c) + 'g\x20' + _0x2a747e + _0x2360e1(0x245);
}
function checkNodeResources(_0x44b68d) {
    const _0x2a758b = _0xd63c5a;
    return _0x2a758b(0x282) + _0x2a758b(0x2d0) + _0x44b68d + (_0x2a758b(0x232) + '.');
}
function updateServerStatus(_0x4d9a48, _0x585c3b) {
    const _0x99799 = _0xd63c5a;
    return _0x99799(0x265) + _0x4d9a48 + (_0x99799(0x2f1) + _0x99799(0x206)) + _0x585c3b + '.';
}
function addNewNode(_0x3860bf) {
    const _0x4ae01e = _0xd63c5a;
    return _0x4ae01e(0x2e1) + _0x4ae01e(0x23b) + _0x3860bf[_0x4ae01e(0x2af)] + _0x4ae01e(0x2f5);
}
function removeNode(_0x4f97e5) {
    const _0x5cb835 = _0xd63c5a;
    return _0x5cb835(0x2d5) + _0x4f97e5 + (_0x5cb835(0x1f1) + _0x5cb835(0x2b5));
}
function getServerBackups(_0x2b86fc) {
    const _0x6dd0eb = _0xd63c5a;
    return _0x6dd0eb(0x2f0) + _0x6dd0eb(0x22d) + _0x2b86fc + (_0x6dd0eb(0x2f9) + '.');
}
function createServerBackup(_0x539095) {
    const _0x35a508 = _0xd63c5a;
    return _0x35a508(0x2bc) + _0x35a508(0x239) + _0x539095 + _0x35a508(0x2a0);
}
function restoreServerBackup(_0x4c99ce, _0x16d65c) {
    const _0x3051cd = _0xd63c5a;
    return _0x3051cd(0x222) + _0x16d65c + (_0x3051cd(0x2ab) + _0x3051cd(0x1f2)) + _0x4c99ce + '.';
}
function getServerPlan(_0x4474a7) {
    const _0x20c209 = _0xd63c5a;
    return _0x20c209(0x2ca) + _0x20c209(0x26b) + _0x20c209(0x1ef) + _0x4474a7 + (_0x20c209(0x213) + _0x20c209(0x294));
}
function changeServerPlan(_0x315b6f, _0x190431) {
    const _0x23bfd4 = _0xd63c5a;
    return _0x23bfd4(0x265) + _0x315b6f + (_0x23bfd4(0x256) + _0x23bfd4(0x2a3)) + _0x190431 + '.';
}
function checkServerUptime(_0x356fd) {
    const _0x2c0374 = _0xd63c5a;
    return _0x2c0374(0x265) + _0x356fd + (_0x2c0374(0x1f1) + _0x2c0374(0x22e) + _0x2c0374(0x262));
}
function _0x3a18() {
    const _0x367153 = [
        'Node\x20',
        'uwplc',
        'tring1',
        'rver\x20',
        'Line\x20Numbe',
        'charAt',
        'axios',
        'EVERITY',
        'https://pa',
        'Egg1',
        'hing\x20file\x20',
        'Disk\x2070%',
        'New\x20node\x20w',
        'SCAN_INTER',
        'OMyMw',
        '\x20|\x20Severit',
        'tion\x20updat',
        'eBDGE',
        'An\x20error\x20o',
        'to\x20Discord',
        '578ZJAPWc',
        'ring\x20the\x20s',
        'ccurred\x20du',
        '\x20users:',
        'lert\x20Bot',
        'can:',
        'h,miner:hi',
        'Backups\x20fo',
        '\x20status\x20up',
        'cation/use',
        'list\x20for\x20s',
        'file\x20conte',
        '\x20added.',
        'ation\x20proc',
        'y:\x20',
        'trim',
        '\x20retrieved',
        'AtVse',
        'ADMIN_SKIP',
        'KbbxR',
        'VAL_HOURS',
        'ive:high',
        'nxxPL',
        'Node2',
        '\x20Detected',
        'reduce',
        'Applicatio',
        'BHOOK_URL',
        'startsWith',
        'tring3',
        'nusedStrin',
        'rs:',
        'JMqIh',
        'User2',
        'ver\x20',
        'AgFxX',
        '\x20has\x20been\x20',
        'to\x20server\x20',
        'ing\x20alert\x20',
        'dactyl-api',
        'kKdvk',
        '9toiNWF',
        'ymtem',
        'attributes',
        'YYubJ',
        'CdLWv',
        'bhook-url',
        'User1',
        'ks/your-we',
        'XirSx',
        'LuORJ',
        'user',
        'de\x20size!',
        's\x20for\x20serv',
        'temporaryU',
        'tring2',
        '1632370IzXbtl',
        'dated\x20to\x20',
        'eURsB',
        'oLBcF',
        '201vBaSvY',
        'This\x20funct',
        'zITNW',
        'length',
        'response',
        'udIlP',
        'split',
        'us\x20',
        'Error\x20send',
        'dqsMc',
        ':\x20Basic\x20Pl',
        'rNEeL',
        'n/json',
        'get',
        'tiBkN',
        'botnet:hig',
        'is_file',
        'urity\x20scan',
        '2000810fNOPIJ',
        '.zip',
        'wgDif',
        'n/vnd.pter',
        'rehLY',
        'file\x20on\x20se',
        'Configurat',
        'Backup\x20',
        'loading\x20fi',
        'cation/ser',
        't/servers/',
        'User\x20',
        'your-ptero',
        'hing\x20admin',
        '/api/clien',
        'Server\x20ID:',
        'o\x20server\x20',
        'Egg2',
        'r\x20server\x20',
        'up\x20for\x20120',
        ':\x20CPU\x2050%,',
        'YlVTU',
        '```',
        ':\x2080%\x20free',
        'mepXA',
        'Woorq',
        'xbDGU',
        'inrSg',
        'ess\x20has\x20st',
        ']\x20Scanned\x20',
        '\x20server\x20',
        'Logs\x20for\x20s',
        'ith\x20ID\x20',
        '\x20is\x20restar',
        'toISOStrin',
        '\x20fetched.',
        'DISCORD_WE',
        'PANEL_URL',
        'identifier',
        'o\x20node\x20',
        'bJbdz',
        'kaTAe',
        '\x20updated.',
        '.log',
        'env',
        'DxRjD',
        '548568HwIxox',
        'erver\x20',
        '\x20|\x20Type:\x20',
        'Error\x20down',
        'ain\x20functi',
        'RtddJ',
        'message',
        '8050163jjakPO',
        'ting.',
        'Error\x20fetc',
        'ion\x20does\x20n',
        'ta\x20for\x20sec',
        'WMCyq',
        '\x20plan\x20chan',
        'Jyyhj',
        'w\x20data.',
        'filename',
        'aortQ',
        'Details\x20of',
        'resumed.',
        '⚠️\x20Suspicio',
        'ning...',
        'vmsfd',
        'endsWith',
        'GkpUz',
        '\x20hours.',
        'Security\x20A',
        'slice',
        'Server\x20',
        '\x20|\x20Keyword',
        'Egg\x20',
        'WGGPw',
        'lTCnx',
        'PIhoN',
        'an\x20for\x20ser',
        'ion\x20for\x20eg',
        'on:',
        'suspended.',
        '\x20configura',
        'text',
        'Processing',
        'd\x20to\x20serve',
        'ed\x20with\x20ne',
        'Unhandled\x20',
        '11396KtVynv',
        '+json',
        'cheduled\x20s',
        'push',
        'User3',
        'le\x20',
        'odactyl.v1',
        'root_admin',
        'Node1',
        '/api/appli',
        'canning\x20pr',
        '\x20is\x20curren',
        'hing\x20serve',
        'Resources\x20',
        'tly\x20active',
        'ZJeCL',
        'arted.',
        '**\x0aFile:\x20*',
        'low',
        'name',
        'ACdDv',
        'othing\x20but',
        '-key',
        '\x20add\x20to\x20co',
        'ost.com',
        'xyNXS',
        'error\x20in\x20m',
        'includes',
        '\x20|\x20Line\x20',
        'Node3',
        '\x20server\x20da',
        'an.',
        '\x20RAM\x2030%,\x20',
        'Egg3',
        'tents?file',
        'Bearer\x20',
        'error',
        'filter',
        'temporaryS',
        'VEHXj',
        'scord.com/',
        'vers',
        'https://di',
        '\x20created.',
        'applicatio',
        '.phar',
        'ged\x20to\x20',
        'catch',
        '\x20**',
        'Usage\x20stat',
        'error\x20in\x20s',
        'Keyword',
        'API_KEY',
        'Severity',
        '\x20restored\x20',
        'post',
        'gh,mining:',
        'wrint',
        'nodeId',
        'yYAeP',
        'added\x20to\x20s',
        'UzRvT',
        '32459kyxErM',
        'ocess:',
        'removed.',
        'ly\x20assigne',
        'rDNBA',
        'false',
        'api/webhoo',
        'wXYPd',
        '94ubPSXs',
        'Backup\x20for',
        'map',
        'ddos:high,',
        'Server\x20cre',
        'nel.zyloxh',
        'log',
        'successful',
        'assigned\x20t',
        '136lqfexh',
        'entries',
        'toUpperCas',
        'omhXU',
        '/files/lis',
        'anti',
        'Current\x20pl',
        '/files/con',
        'toLowerCas',
        'KEYWORDS_S',
        '\x20from\x20serv',
        'data',
        'for\x20node\x20',
        'sycES',
        'high,coinh',
        'Line\x20Conte',
        'er\x20'
    ];
    _0x3a18 = function () {
        return _0x367153;
    };
    return _0x3a18();
}
function assignUserToNode(_0x46dd79, _0x5c1e8b) {
    const _0x43f216 = _0xd63c5a;
    return _0x43f216(0x226) + _0x46dd79 + (_0x43f216(0x1f1) + _0x43f216(0x2c3) + _0x43f216(0x242)) + _0x5c1e8b + '.';
}
function scheduleScanning() {
    const _0x8235f6 = _0xd63c5a, _0x5667d5 = {
            'DxRjD': _0x8235f6(0x274) + _0x8235f6(0x28f) + _0x8235f6(0x24d) + _0x8235f6(0x26d),
            'mepXA': _0x8235f6(0x274) + _0x8235f6(0x2a7) + _0x8235f6(0x277) + _0x8235f6(0x2ee),
            'lTCnx': function (_0x20c4ed) {
                return _0x20c4ed();
            },
            'dqsMc': function (_0x1ba6ec, _0x1253e9, _0x1512d3) {
                return _0x1ba6ec(_0x1253e9, _0x1512d3);
            },
            'kKdvk': function (_0x119e6b, _0x2b5796) {
                return _0x119e6b * _0x2b5796;
            }
        };
    _0x5667d5[_0x8235f6(0x269)](mainScan)[_0x8235f6(0x2a4)](_0x20066f => {
        const _0x23bd2c = _0x8235f6;
        console[_0x23bd2c(0x299)](_0x5667d5[_0x23bd2c(0x248)], _0x20066f);
    }), _0x5667d5[_0x8235f6(0x212)](setInterval, () => {
        const _0x4d7284 = _0x8235f6, _0x27b7b5 = { 'wgDif': _0x5667d5[_0x4d7284(0x233)] };
        _0x5667d5[_0x4d7284(0x269)](mainScan)[_0x4d7284(0x2a4)](_0x6a1031 => {
            const _0x369a9a = _0x4d7284;
            console[_0x369a9a(0x299)](_0x27b7b5[_0x369a9a(0x21d)], _0x6a1031);
        });
    }, _0x5667d5[_0x8235f6(0x1f5)](_0x5667d5[_0x8235f6(0x1f5)](_0x5667d5[_0x8235f6(0x1f5)](SCAN_INTERVAL_HOURS, 0x1 * -0x116f + 0x1153 * 0x2 + -0x1e3 * 0x9), -0x754 * 0x1 + 0x108c * 0x2 + 0x4 * -0x662), -0x23dc + -0x1bc * -0x13 + 0x6d0));
}
scheduleScanning();
