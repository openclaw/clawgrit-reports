# OpenClaw Source Performance

Generated: 2026-07-12T07:32:42.622Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4005.1ms | 4026.7ms | 4004.8ms | 3891.7ms | 3948.6ms | 33.9ms | 739.8MB | 1.249 |
| skipChannels | gateway, skip channels | 3979.0ms | 4013.7ms | 3976.4ms | 3916.1ms | 3955.4ms | 34.5ms | 733.8MB | 1.258 |
| oneInternalHook | gateway, one configured internal hook | 4096.3ms | 4154.0ms | 4093.7ms | 4037.5ms | 4073.4ms | 39.7ms | 720.6MB | 1.236 |
| allInternalHooks | gateway, all internal hooks | 4021.3ms | 4034.7ms | 4020.8ms | 3961.6ms | 3998.0ms | 35.4ms | 720.3MB | 1.244 |
| fiftyPlugins | gateway, 50 manifest plugins | 3968.9ms | 4044.4ms | 4013.9ms | 3879.9ms | 3949.3ms | 36.6ms | 753.6MB | 1.276 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3816.9ms | 3930.1ms | 3816.0ms | 3697.3ms | 3769.2ms | 35.0ms | 738.8MB | 1.310 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 728.3MB | 739.8MB | +11.5MB (+1.6%) | -87.0MB (-17.6%) | stable |
| gateway boot | skipChannels | 713.5MB | 733.8MB | +20.3MB (+2.8%) | +1.7MB (+0.4%) | stable |
| gateway boot | oneInternalHook | 718.2MB | 720.6MB | +2.3MB (+0.3%) | +0.8MB (+0.2%) | stable |
| gateway boot | allInternalHooks | 732.7MB | 720.3MB | -12.4MB (-1.7%) | +43.9MB (+11.3%) | stable |
| gateway boot | fiftyPlugins | 756.8MB | 753.6MB | -3.2MB (-0.4%) | -3.6MB (-1.0%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 716.3MB | 738.8MB | +22.5MB (+3.1%) | -55.8MB (-13.2%) | stable |
| cli | gatewayHealthJson | 57.6MB | 57.7MB | +0.2MB (+0.3%) | n/a | stable |
| cli | configGetGatewayPort | 57.7MB | 57.5MB | -0.2MB (-0.4%) | n/a | stable |
| mock hello | gateway RSS delta avg | 22.3MB | 21.0MB | -1.3MB (-5.7%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| qa-lab | 520.7MB | 477.8MB | ok |
| codex | 479.8MB | 436.8MB | ok |
| llm-task | 443.9MB | 401.0MB | ok |
| anthropic | 442.0MB | 399.0MB | ok |
| xai | 439.3MB | 396.3MB | ok |
| active-memory | 424.4MB | 381.4MB | ok |
| migrate-hermes | 421.3MB | 378.3MB | ok |
| google | 386.4MB | 343.4MB | ok |
| openai | 385.2MB | 342.3MB | ok |
| voice-call | 366.5MB | 323.5MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 2877.0ms | 2891.8ms |
| default | cli.main.gateway-run-bootstrap | 2337.2ms | 2338.4ms |
| default | post-attach.update-sentinel.total | 854.5ms | 877.7ms |
| default | sidecars.restart-sentinel.total | 853.9ms | 877.1ms |
| default | sidecars.session-locks.total | 853.3ms | 876.4ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 2880.5ms | 2966.7ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2348.4ms | 2395.1ms |
| skipChannels | post-attach.update-sentinel.total | 934.6ms | 938.5ms |
| skipChannels | sidecars.restart-sentinel.total | 934.0ms | 937.9ms |
| skipChannels | sidecars.session-locks.total | 933.4ms | 937.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2994.8ms | 3039.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2438.0ms | 2461.7ms |
| oneInternalHook | post-attach.update-sentinel.total | 980.2ms | 1012.8ms |
| oneInternalHook | sidecars.restart-sentinel.total | 979.6ms | 1012.2ms |
| oneInternalHook | sidecars.session-locks.total | 979.0ms | 1011.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2925.0ms | 2956.3ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2379.8ms | 2393.2ms |
| allInternalHooks | post-attach.update-sentinel.total | 965.2ms | 981.0ms |
| allInternalHooks | sidecars.restart-sentinel.total | 964.7ms | 980.5ms |
| allInternalHooks | sidecars.session-locks.total | 964.1ms | 979.8ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2994.7ms | 3035.6ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2428.2ms | 2463.1ms |
| fiftyPlugins | post-attach.update-sentinel.total | 754.0ms | 763.3ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 753.4ms | 762.7ms |
| fiftyPlugins | sidecars.session-locks.total | 752.7ms | 762.0ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 3045.0ms | 3214.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2451.2ms | 2591.7ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 735.7ms | 738.2ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 594.1ms | 594.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 593.7ms | 622.5ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8766.0ms | 0.114 | 747.6MB | 777.7MB | 30.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 8574.0ms | 0.233 | 747.3MB | 762.4MB | 15.1MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 8416.0ms | 0.119 | 752.9MB | 770.8MB | 17.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2889.7ms | 2901.1ms | 57.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 673.3ms | 681.7ms | 57.5MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 2.7MB | 0.0MB | 0.0ms | 37.9ms |

## Observations

No data.

