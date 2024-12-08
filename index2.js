const _0x265da5 = _0x57f8;
(function (_0x2a4825, _0xe502b1) {
    const _0x3e08ea = _0x57f8, _0xe0ea0d = _0x2a4825();
    while (!![]) {
        try {
            const _0x2ec21f = parseInt(_0x3e08ea(0x1cc)) / (-0x23 * 0x3 + -0x1 * 0x11d2 + 0x3 * 0x614) + -parseInt(_0x3e08ea(0x1f2)) / (0x7d * -0x3d + 0x2342 + 0x1 * -0x577) * (-parseInt(_0x3e08ea(0x13a)) / (0x437 * 0x3 + 0x1fd3 * -0x1 + 0x1331)) + -parseInt(_0x3e08ea(0x206)) / (0x2065 + -0x43d + -0x1c24) * (-parseInt(_0x3e08ea(0x21e)) / (0x1 * 0x1d86 + -0x1f * -0x10f + -0x1f29 * 0x2)) + parseInt(_0x3e08ea(0x245)) / (-0x3c7 * 0x7 + 0x1c16 + 0x53 * -0x5) * (-parseInt(_0x3e08ea(0x198)) / (-0x26b * -0x5 + -0x997 + 0x3 * -0xd3)) + parseInt(_0x3e08ea(0x20c)) / (-0x26d * -0x3 + -0x2 * -0x18d + 0x373 * -0x3) * (parseInt(_0x3e08ea(0x149)) / (0x2208 + -0x53 * -0x3e + -0x3619)) + parseInt(_0x3e08ea(0x252)) / (0x1 * 0x1931 + 0x10 + 0x1937 * -0x1) * (-parseInt(_0x3e08ea(0x1ef)) / (-0xdb5 + -0x1 * 0x9f3 + 0x17b3)) + -parseInt(_0x3e08ea(0x1eb)) / (-0x154b + 0x1acf * 0x1 + -0x38 * 0x19);
            if (_0x2ec21f === _0xe502b1)
                break;
            else
                _0xe0ea0d['push'](_0xe0ea0d['shift']());
        } catch (_0x3fda0b) {
            _0xe0ea0d['push'](_0xe0ea0d['shift']());
        }
    }
}(_0x16b7, -0xdd2c8 + -0x356b7 * -0x1 + 0x11b257), require(_0x265da5(0x24c))[_0x265da5(0x16e)]());
const axios = require(_0x265da5(0x189)), fs = require('fs'), path = require(_0x265da5(0x1fc)), PTERO_HOST = process[_0x265da5(0x167)][_0x265da5(0x1ce)], PTERO_APP_KEY = process[_0x265da5(0x167)][_0x265da5(0x1dc) + _0x265da5(0x15e)], PTERO_ACCOUNT_KEY = process[_0x265da5(0x167)][_0x265da5(0x1a8) + _0x265da5(0x187)], NODE_IDS = process[_0x265da5(0x167)][_0x265da5(0x1bd)][_0x265da5(0x202)](',')[_0x265da5(0x24e)](_0x1268c5 => parseInt(_0x1268c5, 0xe35 + -0xf3e + 0x113)), TIME_THRESHOLD = parseInt(process[_0x265da5(0x167)][_0x265da5(0x159) + _0x265da5(0x17b)], -0x6ba * 0x2 + 0x2 * 0x1127 + 0x48 * -0x4a) || (0x1 * -0x8b + -0xc2a + 0xcba) * (0x2 * 0x469 + 0x1 * -0xc56 + -0xc * -0x50) * (-0xf94 + 0x323 + -0x1 * -0xcad), ENABLE_FILE_DOWNLOAD = process[_0x265da5(0x167)][_0x265da5(0x20a) + _0x265da5(0x1cd)] === _0x265da5(0x19e), ENABLE_SERVER_RECREATION = process[_0x265da5(0x167)][_0x265da5(0x1c3) + _0x265da5(0x1e6) + _0x265da5(0x225)] === _0x265da5(0x19e), ENABLE_WEBHOOK_LOGGING = process[_0x265da5(0x167)][_0x265da5(0x1c7) + _0x265da5(0x1ff) + 'NG'] === _0x265da5(0x19e), ENABLE_FILE_DOWNLOAD_LOGGING = process[_0x265da5(0x167)][_0x265da5(0x20a) + _0x265da5(0x1cd) + _0x265da5(0x257)] === _0x265da5(0x19e), WEBHOOK_URL_NODE_STATUS = process[_0x265da5(0x167)][_0x265da5(0x178) + _0x265da5(0x222) + _0x265da5(0x155)], WEBHOOK_URL_FILE_DOWNLOAD = process[_0x265da5(0x167)][_0x265da5(0x178) + _0x265da5(0x209) + _0x265da5(0x150)], NODE_STATUS_INTERVAL = parseInt(process[_0x265da5(0x167)][_0x265da5(0x243) + _0x265da5(0x255)], 0x22ca + -0x940 + -0x1980) || 0x3c2 + 0x3 * -0x50d + 0x1 * 0x1975, API_HEADERS = _0x3fc10c => ({
        'Authorization': _0x265da5(0x25f) + _0x3fc10c,
        'Content-Type': _0x265da5(0x24a) + _0x265da5(0x25b),
        'Accept': _0x265da5(0x24a) + _0x265da5(0x25b)
    }), logError = (_0x5b88ec, _0x1aa0a1) => {
        const _0xdfd01d = _0x265da5;
        console[_0xdfd01d(0x1c8)](_0x5b88ec + ':', _0x1aa0a1[_0xdfd01d(0x1bb)]?.[_0xdfd01d(0x1d8)] || _0x1aa0a1[_0xdfd01d(0x248)] || _0x1aa0a1);
    }, logDownloadDetails = (_0x5b441d, _0x50211f) => {
        const _0x57eacd = _0x265da5, _0x1c6bfa = {
                'ZCycw': _0x57eacd(0x1c2),
                'HKhiN': _0x57eacd(0x1f0) + _0x57eacd(0x168)
            };
        if (ENABLE_FILE_DOWNLOAD_LOGGING) {
            console[_0x57eacd(0x18c)](_0x57eacd(0x16b) + _0x57eacd(0x25d) + _0x50211f + (_0x57eacd(0x1de) + _0x57eacd(0x1a3)) + _0x5b441d);
            if (WEBHOOK_URL_FILE_DOWNLOAD) {
                const _0x56432c = {
                    'content': _0x57eacd(0x1bf) + _0x57eacd(0x15b) + _0x50211f,
                    'embeds': [{
                            'title': _0x57eacd(0x231) + _0x5b441d,
                            'fields': [
                                {
                                    'name': _0x1c6bfa[_0x57eacd(0x15d)],
                                    'value': _0x50211f
                                },
                                {
                                    'name': _0x1c6bfa[_0x57eacd(0x1f8)],
                                    'value': _0x57eacd(0x194) + _0x5b441d + '/' + _0x50211f
                                }
                            ],
                            'color': 0x2ecc71
                        }]
                };
                axios[_0x57eacd(0x249)](WEBHOOK_URL_FILE_DOWNLOAD, _0x56432c)[_0x57eacd(0x201)](() => console[_0x57eacd(0x18c)](_0x57eacd(0x191) + _0x57eacd(0x153) + _0x57eacd(0x214) + _0x57eacd(0x1d4) + '\x20' + _0x50211f))[_0x57eacd(0x13e)](_0x4175ea => logError(_0x57eacd(0x246) + _0x57eacd(0x1d9) + _0x57eacd(0x219) + _0x57eacd(0x215) + _0x57eacd(0x1c4), _0x4175ea));
            }
        }
    };
function generateServerIdentifier() {
    const _0x504c7b = _0x265da5;
    return Math[_0x504c7b(0x138)]()[_0x504c7b(0x22b)](0x241d + -0x2 * 0xa03 + -0x1 * 0xff3)[_0x504c7b(0x1d5)](0x233 + -0x121 * 0x9 + 0x7f8, -0xe5b + -0x3c0 + -0xa * -0x1d1);
}
function calculateServerUptime(_0x1c70c0, _0x54b06e) {
    const _0x19ba04 = _0x265da5, _0x1e4013 = {
            'ELRMa': function (_0x445bb7, _0x116e50) {
                return _0x445bb7 / _0x116e50;
            },
            'QMpnI': function (_0x12e4a9, _0x2b3aa1) {
                return _0x12e4a9 - _0x2b3aa1;
            }
        };
    return _0x1e4013[_0x19ba04(0x21d)](Math[_0x19ba04(0x13c)](_0x1e4013[_0x19ba04(0x1b3)](new Date(_0x54b06e), new Date(_0x1c70c0))), -0x4e * 0xd + 0x175e + -0xf80);
}
function _0x57f8(_0x5c32a8, _0x48052e) {
    const _0x9aa1aa = _0x16b7();
    return _0x57f8 = function (_0x440184, _0x3046d5) {
        _0x440184 = _0x440184 - (0x454 + 0x1186 * 0x2 + -0x1 * 0x2629);
        let _0x48a3c6 = _0x9aa1aa[_0x440184];
        return _0x48a3c6;
    }, _0x57f8(_0x5c32a8, _0x48052e);
}
function validateServerIdentifier(_0xd2ca69) {
    const _0x2d2e0a = _0x265da5;
    return /^[a-zA-Z0-9-_]{8,}$/[_0x2d2e0a(0x261)](_0xd2ca69);
}
function parseServerLogs(_0x29590b) {
    const _0x3a271f = _0x265da5;
    return _0x29590b[_0x3a271f(0x202)]('\x0a')[_0x3a271f(0x24e)](_0x1a2fe0 => _0x1a2fe0[_0x3a271f(0x266)]());
}
function checkFileExtension(_0x1efeec) {
    const _0x137468 = _0x265da5, _0x590545 = {
            'pjvjP': _0x137468(0x1ee),
            'OOuhl': _0x137468(0x151),
            'jOawr': _0x137468(0x1a2)
        }, _0x38aaaa = [
            _0x590545[_0x137468(0x1ec)],
            _0x590545[_0x137468(0x1d7)],
            _0x590545[_0x137468(0x21a)]
        ];
    return _0x38aaaa[_0x137468(0x26a)](_0x1efeec[_0x137468(0x1d5)](_0x1efeec[_0x137468(0x1b2) + 'f']('.'))[_0x137468(0x1c6) + 'e']());
}
function sanitizeFilePath(_0x3c76d5) {
    const _0x1055e5 = _0x265da5;
    return _0x3c76d5[_0x1055e5(0x176)](/[^a-zA-Z0-9-_./]/g, '');
}
function extractPanelUserId(_0xb1eec) {
    const _0x2eb349 = _0x265da5;
    return _0xb1eec[_0x2eb349(0x202)]('-')[_0x2eb349(0x1db)]();
}
function generateApiKey() {
    const _0x1a30e0 = _0x265da5;
    return Array[_0x1a30e0(0x1e5)]({ 'length': 0x20 }, () => Math[_0x1a30e0(0x138)]()[_0x1a30e0(0x22b)](0x1b9d + 0x133f + -0x34 * 0xe6)[0x1e52 + 0xc1 * 0x27 + -0x3bb7 * 0x1])[_0x1a30e0(0x148)]('');
}
function calculateServerResourceUsage(_0x248730, _0x489c7e, _0x301531) {
    const _0x2ba289 = _0x265da5, _0x539991 = {
            'CGTaT': function (_0x38b384, _0x565783) {
                return _0x38b384 / _0x565783;
            }
        };
    return {
        'cpuPercentage': _0x539991[_0x2ba289(0x144)](_0x248730, 0x1 * -0x66f + -0x1 * -0x1c6c + -0x123 * 0x13),
        'memoryPercentage': _0x539991[_0x2ba289(0x144)](_0x489c7e, 0x1 * -0x22e3 + -0x1de7 + 0x73e * 0x9),
        'diskPercentage': _0x539991[_0x2ba289(0x144)](_0x301531, 0x97 * 0x19 + -0x19f6 * -0x1 + 0x2851 * -0x1)
    };
}
function isKeywordBlacklisted(_0xaed8aa) {
    const _0x3b96fe = _0x265da5;
    return Object[_0x3b96fe(0x18a)](checkKeywords)[_0x3b96fe(0x26a)](_0xaed8aa[_0x3b96fe(0x1c6) + 'e']());
}
function createEmbedTitle(_0x4462f1) {
    const _0x486dac = _0x265da5;
    return _0x4462f1[_0x486dac(0x1f9) + 'e']();
}
function parseSeverityLevel(_0x506d90) {
    const _0x2c2cf5 = _0x265da5, _0x430ce0 = {
            'high': 0x3,
            'medium': 0x2,
            'low': 0x1
        };
    return _0x430ce0[_0x506d90[_0x2c2cf5(0x1c6) + 'e']()] || -0x1 * -0x61d + -0x9 * -0x1ab + -0x1520;
}
function formatLogFileName(_0x558dab) {
    const _0x9bdaba = _0x265da5;
    return _0x558dab + '-' + Date[_0x9bdaba(0x239)]() + _0x9bdaba(0x145);
}
function calculateRemainingStorage(_0x25d85f, _0x2ad9eb) {
    const _0x4c6cc7 = _0x265da5, _0x59b14a = {
            'irEww': function (_0x408812, _0x11f0f6) {
                return _0x408812 - _0x11f0f6;
            }
        };
    return _0x59b14a[_0x4c6cc7(0x19f)](_0x25d85f, _0x2ad9eb);
}
function generateRandomUserId() {
    const _0xb01e6 = _0x265da5;
    return _0xb01e6(0x154) + Math[_0xb01e6(0x138)]()[_0xb01e6(0x22b)](0x259c * 0x1 + -0x2501 + -0x77)[_0xb01e6(0x1d5)](0x589 + 0x3fd * 0x1 + -0x1 * 0x97f);
}
function obfuscateApiKey(_0x30764e) {
    const _0x3ea73c = _0x265da5;
    return _0x30764e[_0x3ea73c(0x1d5)](-0xb58 + -0xe40 + 0x1998, 0x1 * 0x1ff6 + 0x1 * -0x13e7 + 0xc0b * -0x1) + _0x3ea73c(0x26c) + _0x30764e[_0x3ea73c(0x20f)](-(-0x5d9 + -0x171d + 0x1cfa));
}
function isFileNameSuspicious(_0x26a154) {
    const _0x131797 = _0x265da5;
    return Object[_0x131797(0x18a)](checkKeywords)[_0x131797(0x268)](_0x1bb8db => _0x26a154[_0x131797(0x1c6) + 'e']()[_0x131797(0x26a)](_0x1bb8db));
}
function extractDomainFromPanelUrl(_0x560caa) {
    const _0x3a3c3a = _0x265da5;
    return new URL(_0x560caa)[_0x3a3c3a(0x221)];
}
function calculateDailyScans(_0x385fe6) {
    const _0x557f22 = _0x265da5, _0x25496a = {
            'yGjmA': function (_0x5ca3db, _0x33bdd5) {
                return _0x5ca3db / _0x33bdd5;
            }
        };
    return Math[_0x557f22(0x1ad)](_0x25496a[_0x557f22(0x18d)](-0x11 * -0x49 + 0x16b5 * 0x1 + -0x4a * 0x5f, _0x385fe6));
}
function formatWebhookUrl(_0x3739cc) {
    const _0x21298f = _0x265da5, _0x2463a7 = { 'WRsCR': _0x21298f(0x236) };
    return _0x3739cc[_0x21298f(0x176)](/(https:\/\/discord.com\/api\/webhooks\/).*/, _0x2463a7[_0x21298f(0x146)]);
}
function countLinesInFile(_0x93c409) {
    const _0x38c7b1 = _0x265da5;
    return _0x93c409[_0x38c7b1(0x202)]('\x0a')[_0x38c7b1(0x1d6)];
}
function filterFilesByExtension(_0x19e449, _0x2f14cf) {
    const _0x4c47ee = _0x265da5;
    return _0x19e449[_0x4c47ee(0x1da)](_0x159f59 => _0x159f59[_0x4c47ee(0x218)][_0x4c47ee(0x21b)](_0x2f14cf));
}
function generateRandomServerName() {
    const _0x27a44a = _0x265da5, _0x788895 = {
            'NpsLc': _0x27a44a(0x141),
            'kXycS': _0x27a44a(0x188),
            'nrzfq': _0x27a44a(0x271),
            'YrFuw': _0x27a44a(0x1ab),
            'miuSD': _0x27a44a(0x1cb),
            'gcQCO': _0x27a44a(0x1a9),
            'dEvLo': _0x27a44a(0x24f),
            'Ydtwy': _0x27a44a(0x1d2),
            'Lpwma': _0x27a44a(0x1ac),
            'zHTfp': _0x27a44a(0x224),
            'ZkKIO': function (_0x2f1e0d, _0x35340c) {
                return _0x2f1e0d * _0x35340c;
            },
            'DfKpD': function (_0x4d5dfc, _0x438dbd) {
                return _0x4d5dfc * _0x438dbd;
            }
        }, _0x448ffb = [
            _0x788895[_0x27a44a(0x258)],
            _0x788895[_0x27a44a(0x259)],
            _0x788895[_0x27a44a(0x205)],
            _0x788895[_0x27a44a(0x183)],
            _0x788895[_0x27a44a(0x244)]
        ], _0x2eb220 = [
            _0x788895[_0x27a44a(0x23f)],
            _0x788895[_0x27a44a(0x264)],
            _0x788895[_0x27a44a(0x20b)],
            _0x788895[_0x27a44a(0x14b)],
            _0x788895[_0x27a44a(0x230)]
        ];
    return _0x448ffb[Math[_0x27a44a(0x1ad)](_0x788895[_0x27a44a(0x1a1)](Math[_0x27a44a(0x138)](), _0x448ffb[_0x27a44a(0x1d6)]))] + '\x20' + _0x2eb220[Math[_0x27a44a(0x1ad)](_0x788895[_0x27a44a(0x216)](Math[_0x27a44a(0x138)](), _0x2eb220[_0x27a44a(0x1d6)]))];
}
function convertFileSizeToMB(_0x121047) {
    const _0x48f5ea = _0x265da5, _0x5dd5bb = {
            'nnPcp': function (_0x55381d, _0x552926) {
                return _0x55381d / _0x552926;
            },
            'yhAtG': function (_0x220c23, _0x1a5dc4) {
                return _0x220c23 * _0x1a5dc4;
            }
        };
    return _0x5dd5bb[_0x48f5ea(0x170)](_0x121047, _0x5dd5bb[_0x48f5ea(0x182)](-0x4f * 0xe + -0x33e + 0xb90, 0xb * 0xaf + -0x140f + 0x108a))[_0x48f5ea(0x242)](-0x14f7 + -0x166 + 0x165f);
}
function sortFilesByName(_0xdba3ed) {
    const _0x60df00 = _0x265da5;
    return _0xdba3ed[_0x60df00(0x18f)]((_0x1c1fa3, _0x223d1d) => _0x1c1fa3[_0x60df00(0x218)][_0x60df00(0x14f) + _0x60df00(0x1ca)](_0x223d1d[_0x60df00(0x218)]));
}
function getServerStatusColor(_0x32277d) {
    const _0x4458dc = _0x265da5, _0x155fb6 = {
            'yQijR': _0x4458dc(0x17c),
            'EiMiU': _0x4458dc(0x212),
            'Ohica': _0x4458dc(0x192),
            'EVFVh': _0x4458dc(0x175)
        }, _0x2cf6c9 = {
            'running': _0x155fb6[_0x4458dc(0x186)],
            'stopped': _0x155fb6[_0x4458dc(0x23b)],
            'error': _0x155fb6[_0x4458dc(0x223)]
        };
    return _0x2cf6c9[_0x32277d[_0x4458dc(0x1c6) + 'e']()] || _0x155fb6[_0x4458dc(0x23d)];
}
function encodeFilePath(_0x1fc978) {
    const _0x19c4f8 = _0x265da5, _0x13a65a = {
            'SjjQW': function (_0x3e49d8, _0x3df6e8) {
                return _0x3e49d8(_0x3df6e8);
            }
        };
    return _0x13a65a[_0x19c4f8(0x13f)](encodeURIComponent, _0x1fc978);
}
function decodeFilePath(_0x547a50) {
    const _0x54b47d = _0x265da5, _0x5caa53 = {
            'XWJPi': function (_0xad0a03, _0x5129a5) {
                return _0xad0a03(_0x5129a5);
            }
        };
    return _0x5caa53[_0x54b47d(0x17e)](decodeURIComponent, _0x547a50);
}
function isApiResponseSuccess(_0x174ccb) {
    const _0x5a157d = _0x265da5, _0x5d108b = {
            'esrZT': function (_0x1955f8, _0xd1413d) {
                return _0x1955f8 >= _0xd1413d;
            },
            'inMmV': function (_0x881b4f, _0x32b2f2) {
                return _0x881b4f < _0x32b2f2;
            }
        };
    return _0x5d108b[_0x5a157d(0x1be)](_0x174ccb, 0x10ad + 0x211a + -0x30ff) && _0x5d108b[_0x5a157d(0x156)](_0x174ccb, -0x51a + 0xaae * -0x1 + 0x10f4);
}
function isAdminUser(_0x2c6a66) {
    const _0x24a0d7 = _0x265da5, _0xbd1e82 = {
            'NInhh': function (_0x3ec179, _0x5a113d) {
                return _0x3ec179 === _0x5a113d;
            },
            'zqHvJ': _0x24a0d7(0x13d)
        };
    return _0xbd1e82[_0x24a0d7(0x19c)](_0x2c6a66[_0x24a0d7(0x180)], _0xbd1e82[_0x24a0d7(0x1f5)]);
}
function _0x16b7() {
    const _0x5d3cd4 = [
        'xAfbI',
        'L_FILE_DOW',
        'ENABLE_FIL',
        'Ydtwy',
        '373448FSvgjU',
        'Error\x20down',
        'createHash',
        'slice',
        'zMbuF',
        'uraCc',
        'red',
        'createdAt',
        's\x20posted\x20t',
        'tails\x20to\x20w',
        'DfKpD',
        'updated_at',
        'name',
        'ownload\x20de',
        'jOawr',
        'endsWith',
        'tus\x20Report',
        'ELRMa',
        '151465BFNEsz',
        'wYsKJ',
        'build',
        'hostname',
        'L_NODE_STA',
        'Ohica',
        'Panel',
        'TION',
        'cation/nod',
        'eted:\x20',
        'ver\x20',
        'qiHOx',
        '\x20checking\x20',
        'toString',
        'sEKaQ',
        'IYxNa',
        'node',
        'nVNqO',
        'zHTfp',
        'Server:\x20',
        'installing',
        'ver:\x20',
        'Downloadin',
        'active',
        '$1...',
        'XmNbG',
        '***',
        'now',
        'Fetching\x20s',
        'EiMiU',
        'sBRMt',
        'EVFVh',
        'wvwlt',
        'gcQCO',
        'aWxwT',
        'update',
        'toFixed',
        'NODE_STATU',
        'miuSD',
        '12kicnDI',
        'Error\x20post',
        'updatedAt',
        'message',
        'post',
        'applicatio',
        'luIHh',
        'dotenv',
        'created_at',
        'map',
        'Node',
        'limits',
        'vers/',
        '1903810DTdPLp',
        'Server\x20rec',
        'pZcSB',
        'S_INTERVAL',
        'ync',
        '_LOGGING',
        'NpsLc',
        'kXycS',
        'Error\x20recr',
        'n/json',
        'JRmiE',
        '\x20file:\x20',
        'r\x20recreati',
        'Bearer\x20',
        'es...',
        'test',
        '/files/lis',
        'les\x20for\x20se',
        'dEvLo',
        'startsWith',
        'trim',
        'hex',
        'some',
        'Node:\x20',
        'includes',
        'Created\x20At',
        '...',
        'pKPqk',
        'JZdeM',
        'SHkIe',
        'user',
        'Reliable',
        'hing\x20serve',
        'random',
        'Pterodacty',
        '722349GjisgV',
        'attributes',
        'abs',
        'admin',
        'catch',
        'SjjQW',
        'nUFLj',
        'Fast',
        'g\x20files\x20fo',
        'eyVjP',
        'CGTaT',
        '.log',
        'WRsCR',
        '/files/dow',
        'join',
        '45fMpUMV',
        'iUPsH',
        'Lpwma',
        'environmen',
        'Checking\x20f',
        'kuSIM',
        'localeComp',
        'NLOAD',
        '.txt',
        'opwPa',
        'oad\x20detail',
        'user_',
        'TUS',
        'inMmV',
        'OFkbH',
        'Starting\x20f',
        'TIME_THRES',
        '\x20stuck\x20ser',
        'oaded:\x20',
        'king\x20for\x20s',
        'ZCycw',
        'KEY',
        'TvUyR',
        'writeFileS',
        'o\x20webhook.',
        'on\x20process',
        'HcOaT',
        'Recreating',
        'mits',
        'IoYti',
        'env',
        'ath',
        'IAuly',
        'Checking\x20n',
        'Downloaded',
        'allocation',
        'md5',
        'config',
        'ad\x20process',
        'nnPcp',
        'vENDL',
        'crypto',
        'Starting\x20s',
        'Error\x20fetc',
        'gray',
        'replace',
        'rver\x20',
        'WEBHOOK_UR',
        'r\x20server:\x20',
        'getTime',
        'HOLD',
        'green',
        'or\x20stuck\x20s',
        'XWJPi',
        'backups',
        'role',
        'reated:\x20',
        'yhAtG',
        'YrFuw',
        'AoUWu',
        'eating\x20ser',
        'yQijR',
        'UNT_KEY',
        'Secure',
        'axios',
        'keys',
        'Server\x20del',
        'log',
        'yGjmA',
        'arraybuffe',
        'sort',
        'qdtLM',
        'File\x20downl',
        'orange',
        'vers',
        'downloads/',
        'KluOZ',
        'r\x20posting\x20',
        'container',
        '2317462WxEXbN',
        'ervers...',
        'Webhook\x20lo',
        'rpyUU',
        'NInhh',
        'statuses\x20o',
        'true',
        'irEww',
        'downloads',
        'ZkKIO',
        '.js',
        'er:\x20',
        'gging\x20is\x20d',
        'to\x20webhook',
        'delete',
        'digest',
        'PTERO_ACCO',
        'Server',
        'lZIsk',
        'Efficient',
        'Instance',
        'floor',
        'Starting\x20n',
        'Cxxez',
        'RsTzl',
        '/api/clien',
        'lastIndexO',
        'QMpnI',
        'ile\x20downlo',
        'DuATy',
        'Node\x20statu',
        'get',
        'database',
        'Last\x20Updat',
        'api/webhoo',
        'response',
        'RewzH',
        'NODE_IDS',
        'esrZT',
        'File\x20Downl',
        'ode\x20status',
        'tuck\x20serve',
        'File\x20Name',
        'ENABLE_SER',
        'ebhook',
        'feature_li',
        'toLowerCas',
        'ENABLE_WEB',
        'error',
        'l\x20Node\x20Sta',
        'are',
        'Robust',
        '787258viZobO',
        'E_DOWNLOAD',
        'PTERO_HOST',
        'nload?file',
        'status',
        'mkdirSync',
        'Host',
        'Status',
        'o\x20webhook:',
        'substring',
        'length',
        'OOuhl',
        'data',
        'ing\x20file\x20d',
        'filter',
        'pop',
        'PTERO_APP_',
        'king\x20node\x20',
        '\x20from\x20serv',
        '/api/appli',
        'isabled.',
        'Unknown',
        'loading\x20fi',
        'wMIHp',
        'cation/ser',
        'from',
        'VER_RECREA',
        'ySdMi',
        'nlYfk',
        'phchm',
        'ring',
        '7596312niZDvx',
        'pjvjP',
        'ks/',
        '.json',
        '11NiJJnZ',
        'Download\x20P',
        'scord.com/',
        '2ujPWiG',
        'https://di',
        'toLocaleSt',
        'zqHvJ',
        'Error\x20chec',
        'QohPZ',
        'HKhiN',
        'toUpperCas',
        'VqymS',
        'process...',
        'path',
        'Dofkr',
        'tGjjv',
        'HOOK_LOGGI',
        'yZkGS',
        'then',
        'split',
        'high',
        't/servers/',
        'nrzfq',
        '92lzSTfU',
        '.env'
    ];
    _0x16b7 = function () {
        return _0x5d3cd4;
    };
    return _0x16b7();
}
function generateFileChecksum(_0x5a3f2a) {
    const _0x9e798b = _0x265da5, _0xa06274 = {
            'sEKaQ': function (_0x25d16a, _0x495834) {
                return _0x25d16a(_0x495834);
            },
            'xAfbI': _0x9e798b(0x172),
            'JZdeM': _0x9e798b(0x16d),
            'vENDL': _0x9e798b(0x267)
        };
    return _0xa06274[_0x9e798b(0x22c)](require, _0xa06274[_0x9e798b(0x208)])[_0x9e798b(0x20e)](_0xa06274[_0x9e798b(0x26e)])[_0x9e798b(0x241)](_0x5a3f2a)[_0x9e798b(0x1a7)](_0xa06274[_0x9e798b(0x171)]);
}
function convertMinutesToHours(_0x436061) {
    const _0x12f4a6 = _0x265da5, _0xca46b0 = {
            'QohPZ': function (_0xc8e99a, _0x227a94) {
                return _0xc8e99a / _0x227a94;
            }
        };
    return _0xca46b0[_0x12f4a6(0x1f7)](_0x436061, -0x1b * 0x15d + -0xf00 + 0x1 * 0x340b)[_0x12f4a6(0x242)](0x217e + -0x349 * 0x5 + 0x110f * -0x1);
}
function isValidWebhookUrl(_0x431958) {
    const _0x5cbbdb = _0x265da5, _0x33a426 = { 'kuSIM': _0x5cbbdb(0x1f3) + _0x5cbbdb(0x1f1) + _0x5cbbdb(0x1ba) + _0x5cbbdb(0x1ed) };
    return _0x431958[_0x5cbbdb(0x265)](_0x33a426[_0x5cbbdb(0x14e)]);
}
function getServerOwnerName(_0x1b3684) {
    const _0x1a2da1 = _0x265da5, _0x2617fc = { 'sBRMt': _0x1a2da1(0x1e1) };
    return _0x1b3684[_0x1a2da1(0x13b)][_0x1a2da1(0x270)]?.[_0x1a2da1(0x218)] || _0x2617fc[_0x1a2da1(0x23c)];
}
function isSeverityHigh(_0x5bb649) {
    const _0xee3156 = _0x265da5, _0x36f888 = {
            'aWxwT': function (_0x15d6b9, _0x397af4) {
                return _0x15d6b9 === _0x397af4;
            },
            'rpyUU': _0xee3156(0x203)
        };
    return _0x36f888[_0xee3156(0x240)](_0x5bb649[_0xee3156(0x1c6) + 'e'](), _0x36f888[_0xee3156(0x19b)]);
}
function generateRandomHexColor() {
    const _0x900a4 = _0x265da5, _0x2c4c5f = {
            'VqymS': function (_0x37fc3f, _0x2cc9d1) {
                return _0x37fc3f * _0x2cc9d1;
            }
        };
    return '#' + Math[_0x900a4(0x1ad)](_0x2c4c5f[_0x900a4(0x1fa)](Math[_0x900a4(0x138)](), 0x1c600b2 + -0x1 * 0xcd6993 + 0x28 * 0x2f6c))[_0x900a4(0x22b)](-0x1 * -0x830 + 0x1db6 + -0x1 * 0x25d6);
}
function maskServerName(_0x2ffd48) {
    const _0x694e5d = _0x265da5;
    return _0x2ffd48[-0x3 * 0x301 + 0x2 * 0x253 + 0x45d] + _0x694e5d(0x238) + _0x2ffd48[_0x694e5d(0x20f)](-(-0x38e * -0x4 + 0x1775 + -0x4 * 0x96b));
}
function isAllowedFileType(_0x4262ab) {
    const _0x1a2ef8 = _0x265da5, _0x5677dc = {
            'IYxNa': _0x1a2ef8(0x1ee),
            'qdtLM': _0x1a2ef8(0x151),
            'luIHh': _0x1a2ef8(0x207)
        }, _0x3c9285 = [
            _0x5677dc[_0x1a2ef8(0x22d)],
            _0x5677dc[_0x1a2ef8(0x190)],
            _0x5677dc[_0x1a2ef8(0x24b)]
        ];
    return _0x3c9285[_0x1a2ef8(0x268)](_0x3a5da3 => _0x4262ab[_0x1a2ef8(0x21b)](_0x3a5da3));
}
async function downloadFilesForNodes() {
    const _0x90c6f2 = _0x265da5, _0x430666 = {
            'IoYti': _0x90c6f2(0x23a) + _0x90c6f2(0x199),
            'XmNbG': function (_0x539523, _0x3685fa) {
                return _0x539523(_0x3685fa);
            },
            'wMIHp': _0x90c6f2(0x1a0),
            'HcOaT': function (_0x578eb3, _0x346567) {
                return _0x578eb3(_0x346567);
            },
            'eyVjP': function (_0x25af95, _0x1a41e9) {
                return _0x25af95(_0x1a41e9);
            },
            'SHkIe': _0x90c6f2(0x18e) + 'r',
            'Dofkr': function (_0x1dabcf, _0x4da8f4, _0x35a213) {
                return _0x1dabcf(_0x4da8f4, _0x35a213);
            },
            'zMbuF': function (_0x267b55, _0x1720cb, _0x269095) {
                return _0x267b55(_0x1720cb, _0x269095);
            },
            'pZcSB': _0x90c6f2(0x174) + _0x90c6f2(0x137) + 'rs'
        };
    try {
        console[_0x90c6f2(0x18c)](_0x430666[_0x90c6f2(0x166)]);
        const _0x3ca5ff = await axios[_0x90c6f2(0x1b7)](PTERO_HOST + (_0x90c6f2(0x1df) + _0x90c6f2(0x1e4) + _0x90c6f2(0x193)), { 'headers': _0x430666[_0x90c6f2(0x237)](API_HEADERS, PTERO_APP_KEY) }), _0x5b0bfe = _0x3ca5ff[_0x90c6f2(0x1d8)][_0x90c6f2(0x1d8)][_0x90c6f2(0x1da)](_0xcc5666 => NODE_IDS[_0x90c6f2(0x26a)](_0xcc5666[_0x90c6f2(0x13b)][_0x90c6f2(0x22e)]));
        for (const _0x4373e7 of _0x5b0bfe) {
            const {
                id: _0x3b5f7f,
                name: _0x942260,
                identifier: _0x5ab51a
            } = _0x4373e7[_0x90c6f2(0x13b)];
            console[_0x90c6f2(0x18c)](_0x90c6f2(0x234) + _0x90c6f2(0x142) + _0x90c6f2(0x179) + _0x942260 + '\x20(' + _0x3b5f7f + ')');
            const _0x10bd97 = path[_0x90c6f2(0x148)](__dirname, _0x430666[_0x90c6f2(0x1e3)], _0x942260);
            fs[_0x90c6f2(0x1d1)](_0x10bd97, { 'recursive': !![] });
            try {
                const _0x896a4b = await axios[_0x90c6f2(0x1b7)](PTERO_HOST + (_0x90c6f2(0x1b1) + _0x90c6f2(0x204)) + _0x5ab51a + (_0x90c6f2(0x262) + 't'), { 'headers': _0x430666[_0x90c6f2(0x163)](API_HEADERS, PTERO_ACCOUNT_KEY) });
                for (const _0x127761 of _0x896a4b[_0x90c6f2(0x1d8)]) {
                    const _0x1f31ec = PTERO_HOST + (_0x90c6f2(0x1b1) + _0x90c6f2(0x204)) + _0x5ab51a + (_0x90c6f2(0x147) + _0x90c6f2(0x1cf) + '=') + _0x127761[_0x90c6f2(0x218)], _0x11c08d = await axios[_0x90c6f2(0x1b7)](_0x1f31ec, {
                            'headers': _0x430666[_0x90c6f2(0x143)](API_HEADERS, PTERO_ACCOUNT_KEY),
                            'responseType': _0x430666[_0x90c6f2(0x26f)]
                        });
                    fs[_0x90c6f2(0x160) + _0x90c6f2(0x256)](path[_0x90c6f2(0x148)](_0x10bd97, _0x127761[_0x90c6f2(0x218)]), _0x11c08d[_0x90c6f2(0x1d8)]), console[_0x90c6f2(0x18c)](_0x90c6f2(0x191) + _0x90c6f2(0x15b) + _0x127761[_0x90c6f2(0x218)]), _0x430666[_0x90c6f2(0x1fd)](logDownloadDetails, _0x942260, _0x127761[_0x90c6f2(0x218)]);
                }
            } catch (_0x1c6fa7) {
                _0x430666[_0x90c6f2(0x1fd)](logError, _0x90c6f2(0x20d) + _0x90c6f2(0x1e2) + _0x90c6f2(0x263) + _0x90c6f2(0x177) + _0x942260, _0x1c6fa7);
            }
        }
    } catch (_0x200233) {
        _0x430666[_0x90c6f2(0x210)](logError, _0x430666[_0x90c6f2(0x254)], _0x200233);
    }
}
async function recreateStuckServers() {
    const _0x40ce65 = _0x265da5, _0x5e7f25 = {
            'IAuly': function (_0x127fda, _0x29db81) {
                return _0x127fda / _0x29db81;
            },
            'yZkGS': function (_0x4aa761, _0x4be483) {
                return _0x4aa761 === _0x4be483;
            },
            'RewzH': _0x40ce65(0x232),
            'RsTzl': function (_0x13c441, _0x350465) {
                return _0x13c441 > _0x350465;
            },
            'iUPsH': function (_0x3aad32, _0x3cf615) {
                return _0x3aad32 - _0x3cf615;
            },
            'Cxxez': _0x40ce65(0x14d) + _0x40ce65(0x17d) + _0x40ce65(0x199),
            'TvUyR': function (_0x56091c, _0x2a4925) {
                return _0x56091c(_0x2a4925);
            },
            'wYsKJ': function (_0x813977, _0x1a1e92) {
                return _0x813977 / _0x1a1e92;
            },
            'qiHOx': function (_0x65ae84, _0x396083) {
                return _0x65ae84(_0x396083);
            },
            'nlYfk': function (_0x5562c5, _0x10585e, _0x52de04) {
                return _0x5562c5(_0x10585e, _0x52de04);
            },
            'nVNqO': _0x40ce65(0x1f6) + _0x40ce65(0x15c) + _0x40ce65(0x1c1) + 'rs'
        };
    try {
        console[_0x40ce65(0x18c)](_0x5e7f25[_0x40ce65(0x1af)]);
        const _0x371321 = await axios[_0x40ce65(0x1b7)](PTERO_HOST + (_0x40ce65(0x1df) + _0x40ce65(0x1e4) + _0x40ce65(0x193)), { 'headers': _0x5e7f25[_0x40ce65(0x15f)](API_HEADERS, PTERO_APP_KEY) }), _0x53edaf = Math[_0x40ce65(0x1ad)](_0x5e7f25[_0x40ce65(0x21f)](Date[_0x40ce65(0x239)](), -0xdad * -0x1 + 0x3 * -0x6d3 + 0xab4)), _0x3289d4 = _0x371321[_0x40ce65(0x1d8)][_0x40ce65(0x1d8)][_0x40ce65(0x1da)](_0x3b4cf7 => {
                const _0x6faa7f = _0x40ce65, {
                        status: _0x24b8da,
                        created_at: _0x3b4c15
                    } = _0x3b4cf7[_0x6faa7f(0x13b)], _0x5184de = Math[_0x6faa7f(0x1ad)](_0x5e7f25[_0x6faa7f(0x169)](new Date(_0x3b4c15)[_0x6faa7f(0x17a)](), -0x4bb + 0x64e + 0x255));
                return _0x5e7f25[_0x6faa7f(0x200)](_0x24b8da, _0x5e7f25[_0x6faa7f(0x1bc)]) && _0x5e7f25[_0x6faa7f(0x1b0)](_0x5e7f25[_0x6faa7f(0x14a)](_0x53edaf, _0x5184de), TIME_THRESHOLD);
            });
        for (const _0x566caf of _0x3289d4) {
            const {
                id: _0x52350f,
                name: _0x4d3270,
                user: _0x5591cc,
                allocations: _0x5780f5,
                limits: _0x3e9694,
                build: _0x223258,
                environment: _0x234847,
                container: _0x52230b,
                feature_limits: _0x25fc33,
                database: _0x14a4a3,
                backups: _0x2f2059
            } = _0x566caf[_0x40ce65(0x13b)];
            console[_0x40ce65(0x18c)](_0x40ce65(0x164) + _0x40ce65(0x15a) + _0x40ce65(0x233) + _0x4d3270 + '\x20(' + _0x52350f + ')');
            try {
                const _0x5af05a = {
                    'name': _0x4d3270,
                    'user': _0x5591cc,
                    'allocations': _0x5780f5,
                    'limits': _0x3e9694,
                    'build': _0x223258,
                    'environment': _0x234847,
                    'container': _0x52230b,
                    'feature_limits': _0x25fc33,
                    'database': _0x14a4a3,
                    'backups': _0x2f2059
                };
                await axios[_0x40ce65(0x1a6)](PTERO_HOST + (_0x40ce65(0x1df) + _0x40ce65(0x1e4) + _0x40ce65(0x251)) + _0x52350f, { 'headers': _0x5e7f25[_0x40ce65(0x15f)](API_HEADERS, PTERO_APP_KEY) }), console[_0x40ce65(0x18c)](_0x40ce65(0x18b) + _0x40ce65(0x227) + _0x4d3270);
                const _0x2b7baf = {
                        'name': _0x5af05a[_0x40ce65(0x218)],
                        'user': _0x5af05a[_0x40ce65(0x270)],
                        'node': NODE_IDS[0x1 * -0x20b0 + 0x1312 + 0xd9e],
                        'allocations': _0x5af05a[_0x40ce65(0x16c) + 's'],
                        'limits': _0x5af05a[_0x40ce65(0x250)],
                        'build': _0x5af05a[_0x40ce65(0x220)],
                        'environment': _0x5af05a[_0x40ce65(0x14c) + 't'],
                        'container': _0x5af05a[_0x40ce65(0x197)],
                        'feature_limits': _0x5af05a[_0x40ce65(0x1c5) + _0x40ce65(0x165)],
                        'database': _0x5af05a[_0x40ce65(0x1b8)],
                        'backups': _0x5af05a[_0x40ce65(0x17f)]
                    }, _0x4140b0 = await axios[_0x40ce65(0x249)](PTERO_HOST + (_0x40ce65(0x1df) + _0x40ce65(0x1e4) + _0x40ce65(0x193)), _0x2b7baf, { 'headers': _0x5e7f25[_0x40ce65(0x229)](API_HEADERS, PTERO_APP_KEY) });
                console[_0x40ce65(0x18c)](_0x40ce65(0x253) + _0x40ce65(0x181) + _0x4140b0[_0x40ce65(0x1d8)][_0x40ce65(0x1d8)][_0x40ce65(0x13b)][_0x40ce65(0x218)]);
            } catch (_0x43e11f) {
                _0x5e7f25[_0x40ce65(0x1e8)](logError, _0x40ce65(0x25a) + _0x40ce65(0x185) + _0x40ce65(0x228) + _0x4d3270, _0x43e11f);
            }
        }
    } catch (_0x52a23b) {
        _0x5e7f25[_0x40ce65(0x1e8)](logError, _0x5e7f25[_0x40ce65(0x22f)], _0x52a23b);
    }
}
async function checkAndPostNodeStatus() {
    const _0x4c7966 = _0x265da5, _0x3c6d49 = {
            'DuATy': _0x4c7966(0x16a) + _0x4c7966(0x1c0) + _0x4c7966(0x260),
            'tGjjv': function (_0x2523e6, _0x48937c) {
                return _0x2523e6(_0x48937c);
            },
            'uraCc': function (_0x66426f, _0x4c61ae) {
                return _0x66426f && _0x4c61ae;
            },
            'KluOZ': _0x4c7966(0x139) + _0x4c7966(0x1c9) + _0x4c7966(0x21c),
            'JRmiE': _0x4c7966(0x1b6) + _0x4c7966(0x214) + _0x4c7966(0x161),
            'opwPa': _0x4c7966(0x19a) + _0x4c7966(0x1a4) + _0x4c7966(0x1e0),
            'ySdMi': function (_0x44682, _0x46b915, _0x3cbee1) {
                return _0x44682(_0x46b915, _0x3cbee1);
            },
            'AoUWu': _0x4c7966(0x1f6) + _0x4c7966(0x1dd) + _0x4c7966(0x19d) + _0x4c7966(0x196) + _0x4c7966(0x1a5)
        };
    try {
        console[_0x4c7966(0x18c)](_0x3c6d49[_0x4c7966(0x1b5)]);
        const _0x126f08 = await axios[_0x4c7966(0x1b7)](PTERO_HOST + (_0x4c7966(0x1df) + _0x4c7966(0x226) + 'es'), { 'headers': _0x3c6d49[_0x4c7966(0x1fe)](API_HEADERS, PTERO_APP_KEY) }), _0x54b8ba = _0x126f08[_0x4c7966(0x1d8)][_0x4c7966(0x1d8)][_0x4c7966(0x24e)](_0x82d4f2 => ({
                'name': _0x82d4f2[_0x4c7966(0x13b)][_0x4c7966(0x218)],
                'status': _0x82d4f2[_0x4c7966(0x13b)][_0x4c7966(0x1d0)],
                'createdAt': _0x82d4f2[_0x4c7966(0x13b)][_0x4c7966(0x24d)],
                'updatedAt': _0x82d4f2[_0x4c7966(0x13b)][_0x4c7966(0x217)]
            }));
        if (_0x3c6d49[_0x4c7966(0x211)](ENABLE_WEBHOOK_LOGGING, WEBHOOK_URL_NODE_STATUS)) {
            const _0x2d2308 = {
                'content': _0x3c6d49[_0x4c7966(0x195)],
                'embeds': _0x54b8ba[_0x4c7966(0x24e)](_0x453211 => ({
                    'title': _0x4c7966(0x269) + _0x453211[_0x4c7966(0x218)],
                    'fields': [
                        {
                            'name': _0x4c7966(0x1d3),
                            'value': _0x453211[_0x4c7966(0x1d0)]
                        },
                        {
                            'name': _0x4c7966(0x26b),
                            'value': new Date(_0x453211[_0x4c7966(0x213)])[_0x4c7966(0x1f4) + _0x4c7966(0x1ea)]()
                        },
                        {
                            'name': _0x4c7966(0x1b9) + 'ed',
                            'value': new Date(_0x453211[_0x4c7966(0x247)])[_0x4c7966(0x1f4) + _0x4c7966(0x1ea)]()
                        }
                    ],
                    'color': _0x453211[_0x4c7966(0x1d0)] === _0x4c7966(0x235) ? -0x56e4ef + -0x397cc2 + 0xbf2e22 : 0x521a6 * -0x2e + 0x1b88fca * -0x1 + -0xd * -0x45d6c2
                }))
            };
            await axios[_0x4c7966(0x249)](WEBHOOK_URL_NODE_STATUS, _0x2d2308), console[_0x4c7966(0x18c)](_0x3c6d49[_0x4c7966(0x25c)]);
        } else
            console[_0x4c7966(0x18c)](_0x3c6d49[_0x4c7966(0x152)]);
    } catch (_0x54044a) {
        _0x3c6d49[_0x4c7966(0x1e7)](logError, _0x3c6d49[_0x4c7966(0x184)], _0x54044a);
    }
}
((async () => {
    const _0x5131eb = _0x265da5, _0x5308e3 = {
            'pKPqk': _0x5131eb(0x158) + _0x5131eb(0x1b4) + _0x5131eb(0x16f) + _0x5131eb(0x26c),
            'OFkbH': function (_0x2df316) {
                return _0x2df316();
            },
            'phchm': _0x5131eb(0x173) + _0x5131eb(0x1c1) + _0x5131eb(0x25e) + _0x5131eb(0x162) + _0x5131eb(0x26c),
            'lZIsk': _0x5131eb(0x1ae) + _0x5131eb(0x1c0) + _0x5131eb(0x22a) + _0x5131eb(0x1fb),
            'wvwlt': function (_0x4d6f97, _0x1d89d0, _0x3a2143) {
                return _0x4d6f97(_0x1d89d0, _0x3a2143);
            },
            'nUFLj': function (_0x14da72, _0x3ee129) {
                return _0x14da72 * _0x3ee129;
            }
        };
    ENABLE_FILE_DOWNLOAD && (console[_0x5131eb(0x18c)](_0x5308e3[_0x5131eb(0x26d)]), await _0x5308e3[_0x5131eb(0x157)](downloadFilesForNodes)), ENABLE_SERVER_RECREATION && (console[_0x5131eb(0x18c)](_0x5308e3[_0x5131eb(0x1e9)]), await _0x5308e3[_0x5131eb(0x157)](recreateStuckServers)), ENABLE_WEBHOOK_LOGGING && (console[_0x5131eb(0x18c)](_0x5308e3[_0x5131eb(0x1aa)]), _0x5308e3[_0x5131eb(0x23e)](setInterval, checkAndPostNodeStatus, _0x5308e3[_0x5131eb(0x140)](NODE_STATUS_INTERVAL, 0x4f1 * -0x1 + -0x1fda + -0xd91 * -0x3)));
})());
