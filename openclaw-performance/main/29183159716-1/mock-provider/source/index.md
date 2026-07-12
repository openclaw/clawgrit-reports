# OpenClaw Source Performance

Generated: 2026-07-12T06:50:15.102Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 4129.2ms | 4151.1ms | 4140.2ms | 4013.2ms | 4073.7ms | 35.2ms | 728.3MB | 1.220 |
| skipChannels | gateway, skip channels | 4053.7ms | 4087.0ms | 4051.1ms | 3996.7ms | 4031.2ms | 38.6ms | 713.5MB | 1.264 |
| oneInternalHook | gateway, one configured internal hook | 4012.2ms | 4098.7ms | 4009.6ms | 3953.4ms | 3989.3ms | 35.9ms | 718.2MB | 1.253 |
| allInternalHooks | gateway, all internal hooks | 4015.7ms | 4064.6ms | 4013.7ms | 3955.1ms | 3994.4ms | 36.0ms | 732.7MB | 1.246 |
| fiftyPlugins | gateway, 50 manifest plugins | 3908.6ms | 3966.2ms | 3912.2ms | 3823.8ms | 3890.3ms | 36.2ms | 756.8MB | 1.306 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 3700.3ms | 3731.5ms | 3698.8ms | 3606.5ms | 3683.0ms | 37.5ms | 716.3MB | 1.087 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 745.6MB | 728.3MB | -17.3MB (-2.3%) | +84.4MB (+20.5%) | stable |
| gateway boot | skipChannels | 713.4MB | 713.5MB | +0.1MB (+0.0%) | -1.3MB (-0.3%) | stable |
| gateway boot | oneInternalHook | 730.7MB | 718.2MB | -12.4MB (-1.7%) | -1.0MB (-0.2%) | stable |
| gateway boot | allInternalHooks | 735.1MB | 732.7MB | -2.3MB (-0.3%) | -44.5MB (-10.2%) | stable |
| gateway boot | fiftyPlugins | 742.6MB | 756.8MB | +14.2MB (+1.9%) | +6.6MB (+1.8%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 730.9MB | 716.3MB | -14.5MB (-2.0%) | +68.8MB (+19.5%) | stable |
| cli | gatewayHealthJson | 57.5MB | 57.6MB | +0.1MB (+0.1%) | n/a | stable |
| cli | configGetGatewayPort | 57.7MB | 57.7MB | +0.0MB (+0.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | 28.1MB | 22.3MB | -5.7MB (-20.5%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| qa-lab | 519.6MB | 476.6MB | ok |
| codex | 470.3MB | 427.3MB | ok |
| llm-task | 446.9MB | 403.9MB | ok |
| xai | 446.0MB | 403.1MB | ok |
| anthropic | 444.7MB | 401.7MB | ok |
| active-memory | 431.2MB | 388.3MB | ok |
| migrate-hermes | 428.2MB | 385.2MB | ok |
| voice-call | 392.9MB | 349.9MB | ok |
| openai | 386.9MB | 343.9MB | ok |
| google | 376.5MB | 333.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | cli.main.gateway-run-bootstrap.total | 2982.8ms | 3028.2ms |
| default | cli.main.gateway-run-bootstrap | 2418.1ms | 2459.5ms |
| default | post-attach.update-sentinel.total | 871.1ms | 890.9ms |
| default | sidecars.restart-sentinel.total | 870.5ms | 890.4ms |
| default | sidecars.session-locks.total | 869.8ms | 889.7ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 2931.9ms | 2980.5ms |
| skipChannels | cli.main.gateway-run-bootstrap | 2384.1ms | 2418.8ms |
| skipChannels | post-attach.update-sentinel.total | 895.2ms | 961.8ms |
| skipChannels | sidecars.restart-sentinel.total | 894.7ms | 961.2ms |
| skipChannels | sidecars.session-locks.total | 893.9ms | 960.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 2943.5ms | 3000.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2377.6ms | 2441.0ms |
| oneInternalHook | post-attach.update-sentinel.total | 959.2ms | 979.2ms |
| oneInternalHook | sidecars.restart-sentinel.total | 958.6ms | 978.6ms |
| oneInternalHook | sidecars.session-locks.total | 958.0ms | 977.9ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 2918.7ms | 2948.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2357.9ms | 2382.2ms |
| allInternalHooks | post-attach.update-sentinel.total | 961.2ms | 970.2ms |
| allInternalHooks | sidecars.restart-sentinel.total | 960.6ms | 969.6ms |
| allInternalHooks | sidecars.session-locks.total | 959.9ms | 968.9ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap.total | 2969.2ms | 2971.2ms |
| fiftyPlugins | cli.main.gateway-run-bootstrap | 2384.8ms | 2409.1ms |
| fiftyPlugins | post-attach.update-sentinel.total | 754.8ms | 760.5ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 754.2ms | 759.9ms |
| fiftyPlugins | sidecars.session-locks.total | 753.6ms | 759.2ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap.total | 2994.1ms | 3008.7ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-bootstrap | 2427.6ms | 2434.9ms |
| fiftyStartupLazyPlugins | memory.ready.rssMb | 707.7ms | 714.9ms |
| fiftyStartupLazyPlugins | memory.ready.heapTotalMb | 566.6ms | 569.3ms |
| fiftyStartupLazyPlugins | cli.main.gateway-run-pre-bootstrap.total | 566.5ms | 573.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 8929.0ms | 0.112 | 763.1MB | 790.4MB | 27.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 8554.0ms | 0.117 | 757.4MB | 782.0MB | 24.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 8571.0ms | 0.233 | 751.0MB | 766.1MB | 15.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 2923.7ms | 2937.7ms | 57.6MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 633.8ms | 644.2ms | 57.7MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 2.7MB | 0.0MB | 0.0ms | 36.4ms |

## Observations

No data.

