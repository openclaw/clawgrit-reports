# OpenClaw Source Performance

Generated: 2026-07-10T06:39:54.234Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5127.0ms | 5593.4ms | 5126.9ms | 4896.1ms | 5010.0ms | 44.3ms | 836.2MB | 1.251 |
| skipChannels | gateway, skip channels | 5437.5ms | 5512.7ms | 5405.1ms | 5165.4ms | 5211.3ms | 45.4ms | 816.3MB | 1.295 |
| oneInternalHook | gateway, one configured internal hook | 4997.4ms | 5683.3ms | 5003.4ms | 4923.8ms | 4967.5ms | 51.9ms | 820.0MB | 1.232 |
| allInternalHooks | gateway, all internal hooks | 5174.4ms | 5493.8ms | 5158.5ms | 5029.9ms | 5073.8ms | 49.1ms | 811.6MB | 1.353 |
| fiftyPlugins | gateway, 50 manifest plugins | 5154.4ms | 5167.0ms | 5153.6ms | 4881.6ms | 4983.0ms | 49.4ms | 778.2MB | 1.355 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 4758.8ms | 4929.2ms | 4757.5ms | 4607.3ms | 4689.8ms | 49.0ms | 781.6MB | 1.261 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 523.8MB | 836.2MB | +312.4MB (+59.7%) | +373.7MB (+160.9%) | watch |
| gateway boot | skipChannels | 530.9MB | 816.3MB | +285.4MB (+53.8%) | +294.5MB (+115.7%) | watch |
| gateway boot | oneInternalHook | 521.4MB | 820.0MB | +298.6MB (+57.3%) | +364.3MB (+152.5%) | watch |
| gateway boot | allInternalHooks | 533.4MB | 811.6MB | +278.2MB (+52.2%) | +319.7MB (+135.9%) | watch |
| gateway boot | fiftyPlugins | 533.7MB | 778.2MB | +244.5MB (+45.8%) | +300.9MB (+137.1%) | watch |
| gateway boot | fiftyStartupLazyPlugins | 533.6MB | 781.6MB | +248.1MB (+46.5%) | +355.2MB (+175.8%) | watch |
| cli | gatewayHealthJson | 56.4MB | 57.0MB | +0.6MB (+1.1%) | n/a | stable |
| cli | configGetGatewayPort | 56.4MB | 57.1MB | +0.8MB (+1.3%) | n/a | stable |
| mock hello | gateway RSS delta avg | 81.7MB | 27.8MB | -53.9MB (-65.9%) | n/a | improved |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 452.8MB | 409.7MB | ok |
| xai | 420.5MB | 377.4MB | ok |
| migrate-hermes | 418.9MB | 375.9MB | ok |
| llm-task | 403.5MB | 360.4MB | ok |
| active-memory | 400.4MB | 357.3MB | ok |
| openai | 390.9MB | 347.8MB | ok |
| google | 361.1MB | 318.0MB | ok |
| voice-call | 360.9MB | 317.8MB | ok |
| minimax | 352.0MB | 308.9MB | ok |
| xiaomi | 313.0MB | 269.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 3670.6ms | 4008.5ms |
| default | cli.main.gateway-run-bootstrap | 2933.8ms | 3320.9ms |
| default | post-attach.update-sentinel.total | 1276.9ms | 1396.8ms |
| default | sidecars.restart-sentinel.total | 1276.0ms | 1396.0ms |
| default | sidecars.session-locks.total | 1274.9ms | 1394.9ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 3854.0ms | 3906.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 3130.2ms | 3168.9ms |
| skipChannels | post-attach.update-sentinel.total | 1322.9ms | 1324.2ms |
| skipChannels | sidecars.restart-sentinel.total | 1322.1ms | 1323.3ms |
| skipChannels | sidecars.session-locks.total | 1321.0ms | 1321.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3772.0ms | 4092.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 3022.7ms | 3236.5ms |
| oneInternalHook | post-attach.update-sentinel.total | 1341.5ms | 1389.8ms |
| oneInternalHook | sidecars.restart-sentinel.total | 1340.7ms | 1388.8ms |
| oneInternalHook | sidecars.session-locks.total | 1339.5ms | 1387.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3855.2ms | 3921.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 3097.6ms | 3188.2ms |
| allInternalHooks | post-attach.update-check.total | 1112.5ms | 1216.3ms |
| allInternalHooks | ready.total | 1091.6ms | 1198.0ms |
| allInternalHooks | runtime.post-attach.total | 1088.5ms | 1195.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3610.8ms | 3829.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2997.4ms | 3091.8ms |
| fiftyPlugins | post-attach.update-sentinel.total | 981.6ms | 1186.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 979.4ms | 1184.8ms |
| fiftyPlugins | sidecars.session-locks.total | 977.7ms | 1183.5ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3900.7ms | 3994.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 3155.9ms | 3212.9ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 772.3ms | 773.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 744.7ms | 781.9ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-imports.total | 664.5ms | 695.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10224.0ms | 0.196 | 795.9MB | 820.6MB | 24.6MB | mock-openai/gpt-5.5 |
| run-002 | pass | 1/1 | 8689.0ms | 0.230 | 792.0MB | 822.8MB | 30.7MB | mock-openai/gpt-5.5 |
| run-003 | pass | 1/1 | 9730.0ms | 0.103 | 754.6MB | 782.7MB | 28.1MB | mock-openai/gpt-5.5 |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3489.8ms | 3493.8ms | 57.0MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 757.3ms | 773.4ms | 57.1MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 4.1MB | 0.0MB | 0.1ms | 53.7ms |

## Observations

No data.

