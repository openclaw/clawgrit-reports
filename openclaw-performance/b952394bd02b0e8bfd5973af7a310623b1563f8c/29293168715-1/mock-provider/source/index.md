# OpenClaw Source Performance

Generated: 2026-07-13T23:34:02.846Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 3506.8ms | 3699.8ms | 3494.5ms | 3283.5ms | 3352.0ms | 48.3ms | 863.6MB | 1.460 |
| skipChannels | gateway, skip channels | 3398.1ms | 3608.6ms | 3397.7ms | 3316.1ms | 3364.6ms | 51.2ms | 755.7MB | 1.495 |
| oneInternalHook | gateway, one configured internal hook | 4757.1ms | 4883.5ms | 4757.2ms | 4597.2ms | 4658.6ms | 53.3ms | 854.9MB | 1.433 |
| allInternalHooks | gateway, all internal hooks | 4823.9ms | 5363.8ms | 4823.9ms | 4731.7ms | 4787.1ms | 46.0ms | 868.3MB | 1.451 |
| fiftyPlugins | gateway, 50 manifest plugins | 5806.9ms | 6250.3ms | 5807.0ms | 5249.5ms | 5342.4ms | 59.2ms | 924.5MB | 1.440 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 5506.6ms | 5580.1ms | 5506.4ms | 4893.9ms | 4995.7ms | 64.7ms | 942.4MB | 1.453 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| qa-lab | 586.3MB | 539.7MB | ok |
| xai | 526.5MB | 479.9MB | ok |
| migrate-hermes | 522.5MB | 475.9MB | ok |
| llm-task | 515.9MB | 469.3MB | ok |
| codex | 515.8MB | 469.2MB | ok |
| anthropic | 510.4MB | 463.8MB | ok |
| active-memory | 509.2MB | 462.7MB | ok |
| openai | 435.6MB | 389.0MB | ok |
| voice-call | 425.9MB | 379.3MB | ok |
| google | 424.7MB | 378.1MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 908.9ms | 994.4ms |
| default | post-attach.update-sentinel.total | 908.6ms | 1161.0ms |
| default | sidecars.restart-sentinel.total | 907.9ms | 1160.3ms |
| default | sidecars.session-locks.total | 907.1ms | 1159.4ms |
| default | post-ready.agent-runtime-plugins.total | 905.0ms | 1157.4ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 959.6ms | 1001.2ms |
| skipChannels | post-attach.update-sentinel.total | 863.0ms | 941.1ms |
| skipChannels | sidecars.restart-sentinel.total | 862.4ms | 940.4ms |
| skipChannels | sidecars.session-locks.total | 861.5ms | 939.4ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 860.2ms | 860.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3751.8ms | 3801.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 3012.3ms | 3042.6ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2982.6ms | 3010.0ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2981.7ms | 3009.1ms |
| oneInternalHook | memory.ready.rssMb | 831.3ms | 842.6ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3813.9ms | 3978.0ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 3071.1ms | 3219.0ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 3037.5ms | 3192.6ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 3036.4ms | 3191.6ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 997.0ms | 997.0ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 3923.9ms | 4183.4ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2996.7ms | 3265.3ms |
| fiftyPlugins | cli.bootstrap.plugin-plan.total | 2961.7ms | 3226.3ms |
| fiftyPlugins | cli.bootstrap.plugin-plan-import.total | 2960.3ms | 3224.7ms |
| fiftyPlugins | post-attach.update-sentinel.total | 1417.5ms | 1560.6ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3906.1ms | 3957.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 3031.8ms | 3056.4ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan.total | 2998.4ms | 3023.4ms |
| fiftyStartupLazyPlugins | cli.bootstrap.plugin-plan-import.total | 2997.3ms | 3022.0ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 1081.5ms | 1198.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12792.0ms | 0.000 | 2261.6MB | 934.0MB | -1327.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10453.0ms | 0.096 | 888.8MB | 914.5MB | 25.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10443.0ms | 0.192 | 888.6MB | 913.5MB | 24.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4370.4ms | 6091.6ms | 62.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1085.3ms | 1107.1ms | 63.0MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 2.9MB | 0.0MB | 0.1ms | 48.3ms |

## Observations

No data.

