# OpenClaw Source Performance

Generated: 2026-07-16T08:55:37.652Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3906.7ms | 4192.2ms | 3900.5ms | 3666.3ms | 3749.2ms | 52.2ms | 781.9MB | 1.536 |
| skipChannels | gateway, skip channels | 3512.0ms | 3584.9ms | 3504.4ms | 3371.8ms | 3426.6ms | 53.5ms | 771.4MB | 1.426 |
| oneInternalHook | gateway, one configured internal hook | 5026.4ms | 5212.9ms | 5026.1ms | 4750.6ms | 4802.3ms | 50.8ms | 918.8MB | 1.393 |
| allInternalHooks | gateway, all internal hooks | 5042.5ms | 5138.4ms | 5041.4ms | 4783.4ms | 4840.1ms | 46.3ms | 917.2MB | 1.388 |
| fiftyPlugins | gateway, 50 manifest plugins | 4652.1ms | 4670.9ms | 4651.7ms | 4252.7ms | 4332.5ms | 43.5ms | 837.8MB | 1.322 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5071.2ms | 5229.8ms | 5071.2ms | 4422.4ms | 4526.2ms | 57.8ms | 931.7MB | 1.380 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| llm-task | 518.6MB | 472.1MB | ok |
| workboard | 518.4MB | 472.0MB | ok |
| codex | 517.6MB | 471.1MB | ok |
| xai | 516.3MB | 469.8MB | ok |
| active-memory | 514.0MB | 467.5MB | ok |
| migrate-hermes | 509.2MB | 462.8MB | ok |
| anthropic | 506.3MB | 459.8MB | ok |
| google | 431.7MB | 385.3MB | ok |
| openai | 429.9MB | 383.4MB | ok |
| voice-call | 420.9MB | 374.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | post-attach.update-sentinel.total | 1065.9ms | 1159.0ms |
| default | sidecars.restart-sentinel.total | 1065.2ms | 1158.4ms |
| default | sidecars.session-locks.total | 1064.3ms | 1157.6ms |
| default | post-ready.agent-runtime-plugins.total | 1062.3ms | 1155.7ms |
| default | post-attach.update-check.total | 1003.2ms | 1102.4ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 1008.1ms | 1053.9ms |
| skipChannels | post-attach.update-sentinel.total | 999.6ms | 1056.9ms |
| skipChannels | sidecars.restart-sentinel.total | 998.8ms | 1056.2ms |
| skipChannels | sidecars.session-locks.total | 997.7ms | 1055.3ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 940.7ms | 979.6ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3765.4ms | 3915.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 3026.9ms | 3200.3ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2992.7ms | 3158.5ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2991.8ms | 3157.6ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 910.1ms | 923.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3814.2ms | 3860.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 3067.9ms | 3113.4ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 3031.0ms | 3077.7ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 3030.1ms | 3076.6ms |
| allInternalHooks | memory.ready.rssMb | 890.2ms | 891.7ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3223.1ms | 3267.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2509.9ms | 2548.0ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 2476.4ms | 2505.1ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 2475.4ms | 2504.1ms |
| fiftyPlugins | post-attach.update-sentinel.total | 1043.2ms | 1047.8ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3420.4ms | 3624.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2749.1ms | 2850.6ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 2717.4ms | 2816.4ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 2716.1ms | 2815.4ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 1116.1ms | 1164.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11962.0ms | 0.000 | 2361.1MB | 903.3MB | -1457.8MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9333.0ms | 0.107 | 862.5MB | 890.6MB | 28.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10056.0ms | 0.199 | 908.7MB | 935.6MB | 26.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3709.7ms | 4731.5ms | 62.9MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 926.5ms | 975.5ms | 63.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 2.9MB | 0.0MB | 0.1ms | 51.6ms |

## Observations

No data.

