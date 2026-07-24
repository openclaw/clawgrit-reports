# OpenClaw Source Performance

Generated: 2026-07-24T06:11:59.329Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5951.2ms | 6100.6ms | 5826.7ms | 3021.3ms | 5895.0ms | 43.2ms | 1038.2MB | 1.344 |
| skipChannels | gateway, skip channels | 3049.9ms | 3064.5ms | 3050.2ms | 2974.9ms | 3015.8ms | 39.5ms | 780.5MB | 1.349 |
| oneInternalHook | gateway, one configured internal hook | 4329.3ms | 6599.2ms | 4329.1ms | 4164.7ms | 4211.6ms | 42.8ms | 953.8MB | 1.212 |
| allInternalHooks | gateway, all internal hooks | 6704.0ms | 6781.8ms | 6703.8ms | 4349.7ms | 4394.9ms | 41.6ms | 984.2MB | 1.208 |
| fiftyPlugins | gateway, 50 manifest plugins | 8115.3ms | 8356.8ms | 8115.3ms | 4088.7ms | 4162.6ms | 39.9ms | 1150.4MB | 1.243 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8134.4ms | 8239.0ms | 8131.0ms | 3964.6ms | 4044.8ms | 40.6ms | 1105.2MB | 1.237 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 1001.7MB | 1038.2MB | +36.5MB (+3.6%) | +25.0MB (+3.9%) | stable |
| gateway boot | skipChannels | 764.0MB | 780.5MB | +16.5MB (+2.2%) | +24.7MB (+6.9%) | stable |
| gateway boot | oneInternalHook | 942.9MB | 953.8MB | +10.9MB (+1.2%) | +25.5MB (+5.4%) | stable |
| gateway boot | allInternalHooks | 948.6MB | 984.2MB | +35.6MB (+3.8%) | -283.8MB (-43.5%) | stable |
| gateway boot | fiftyPlugins | 1165.4MB | 1150.4MB | -15.1MB (-1.3%) | -115.0MB (-15.1%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1130.8MB | 1105.2MB | -25.6MB (-2.3%) | +155.8MB (+26.3%) | stable |
| cli | gatewayHealthJson | 60.1MB | 61.7MB | +1.6MB (+2.7%) | n/a | stable |
| cli | configGetGatewayPort | 60.2MB | 60.8MB | +0.7MB (+1.1%) | n/a | stable |
| mock hello | gateway RSS delta avg | -377.6MB | -314.0MB | +63.6MB (-16.9%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| migrate-hermes | 510.4MB | 464.0MB | ok |
| codex | 509.9MB | 463.5MB | ok |
| active-memory | 508.2MB | 461.8MB | ok |
| llm-task | 507.6MB | 461.1MB | ok |
| memory-lancedb | 506.2MB | 459.7MB | ok |
| workboard | 505.9MB | 459.4MB | ok |
| google-meet | 505.9MB | 459.4MB | ok |
| teams-meetings | 503.3MB | 456.8MB | ok |
| voice-call | 501.9MB | 455.4MB | ok |
| zoom-meetings | 500.7MB | 454.2MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3777.7ms | 3809.9ms |
| default | post-ready.agent-runtime-plugins.total | 3765.0ms | 3787.0ms |
| default | post-attach.update-check.total | 3762.2ms | 3784.3ms |
| default | post-attach.update-sentinel.total | 3752.7ms | 3775.8ms |
| default | sidecars.restart-sentinel.total | 3751.6ms | 3774.8ms |
| skipChannels | sidecars.internal-hooks.total | 939.5ms | 960.5ms |
| skipChannels | post-attach.update-check.total | 872.8ms | 927.0ms |
| skipChannels | ready.total | 855.9ms | 909.9ms |
| skipChannels | runtime.post-attach.total | 854.5ms | 908.4ms |
| skipChannels | post-attach.log.total | 853.7ms | 907.3ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3211.7ms | 3296.3ms |
| oneInternalHook | sidecars.session-locks.total | 3099.3ms | 3099.3ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3097.7ms | 3097.7ms |
| oneInternalHook | post-attach.update-sentinel.total | 3093.2ms | 3093.2ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3092.1ms | 3092.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3301.3ms | 3387.1ms |
| allInternalHooks | sidecars.session-locks.total | 3047.7ms | 3061.8ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3046.0ms | 3060.4ms |
| allInternalHooks | post-attach.update-sentinel.total | 3041.4ms | 3056.0ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3040.3ms | 3055.1ms |
| fiftyPlugins | sidecars.session-locks.total | 4763.6ms | 5018.3ms |
| fiftyPlugins | post-ready.maintenance.total | 4673.3ms | 4922.4ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4637.8ms | 4876.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4435.3ms | 4650.3ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4434.5ms | 4649.2ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4716.9ms | 4728.5ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4625.1ms | 4639.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4589.4ms | 4602.2ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4385.9ms | 4398.2ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4385.0ms | 4397.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10390.0ms | 0.000 | 2418.8MB | 1038.3MB | -1380.5MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9722.0ms | 0.206 | 810.8MB | 1032.3MB | 221.6MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9644.0ms | 0.207 | 813.2MB | 1030.2MB | 217.1MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3353.9ms | 3467.8ms | 61.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 789.8ms | 792.7ms | 60.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 66.8ms |

## Observations

No data.

