# OpenClaw Source Performance

Generated: 2026-07-24T15:31:01.023Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7361.7ms | 8171.6ms | 7189.1ms | 3690.4ms | 7226.4ms | 56.2ms | 896.6MB | 1.358 |
| skipChannels | gateway, skip channels | 7580.2ms | 7977.8ms | 7547.2ms | 3770.8ms | 3819.4ms | 50.0ms | 908.3MB | 1.325 |
| oneInternalHook | gateway, one configured internal hook | 7481.9ms | 7881.5ms | 7481.7ms | 5023.3ms | 5070.3ms | 50.2ms | 1120.1MB | 1.370 |
| allInternalHooks | gateway, all internal hooks | 7296.0ms | 8072.7ms | 7252.9ms | 4813.7ms | 4865.9ms | 47.2ms | 973.7MB | 1.241 |
| fiftyPlugins | gateway, 50 manifest plugins | 10466.4ms | 10792.4ms | 10466.3ms | 4890.4ms | 4983.0ms | 48.4ms | 1064.0MB | 1.242 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 10527.9ms | 11457.3ms | 10526.9ms | 5215.9ms | 5310.0ms | 50.0ms | 1131.0MB | 1.278 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| codex | 515.6MB | 469.1MB | ok |
| active-memory | 510.3MB | 463.9MB | ok |
| anthropic | 507.5MB | 461.1MB | ok |
| migrate-hermes | 506.9MB | 460.5MB | ok |
| google-meet | 505.6MB | 459.2MB | ok |
| workboard | 503.8MB | 457.3MB | ok |
| teams-meetings | 502.4MB | 456.0MB | ok |
| llm-task | 502.2MB | 455.8MB | ok |
| memory-lancedb | 502.0MB | 455.5MB | ok |
| voice-call | 501.7MB | 455.3MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4704.1ms | 5242.8ms |
| default | post-ready.agent-runtime-plugins.total | 4690.7ms | 5231.7ms |
| default | post-attach.update-check.total | 4685.8ms | 5223.4ms |
| default | post-attach.update-sentinel.total | 4671.9ms | 5210.8ms |
| default | sidecars.restart-sentinel.total | 4670.3ms | 5208.9ms |
| skipChannels | sidecars.session-locks.total | 5017.9ms | 5230.5ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 5014.9ms | 5227.0ms |
| skipChannels | post-attach.update-sentinel.total | 5002.6ms | 5219.9ms |
| skipChannels | sidecars.restart-sentinel.total | 5001.1ms | 5217.9ms |
| skipChannels | sidecars.ready.total | 4980.9ms | 5190.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3785.7ms | 3836.9ms |
| oneInternalHook | sidecars.session-locks.total | 3530.1ms | 3663.0ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3526.3ms | 3657.3ms |
| oneInternalHook | post-attach.update-sentinel.total | 3517.6ms | 3645.2ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3516.3ms | 3643.7ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3639.6ms | 4232.0ms |
| allInternalHooks | sidecars.session-locks.total | 3300.5ms | 3453.6ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3298.8ms | 3451.5ms |
| allInternalHooks | post-attach.update-sentinel.total | 3293.4ms | 3446.0ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3292.1ms | 3444.7ms |
| fiftyPlugins | sidecars.session-locks.total | 6191.8ms | 6981.3ms |
| fiftyPlugins | post-ready.maintenance.total | 6093.1ms | 6870.0ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 6054.1ms | 6819.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 5838.0ms | 6443.0ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 5836.8ms | 6440.9ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 6461.0ms | 6544.5ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 6326.6ms | 6436.9ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 6271.7ms | 6391.6ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 5762.1ms | 6123.0ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 5760.5ms | 6122.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11198.0ms | 0.000 | 2487.4MB | 971.0MB | -1516.4MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10518.0ms | 0.190 | 822.9MB | 1014.7MB | 191.8MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10542.0ms | 0.190 | 838.1MB | 1053.7MB | 215.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3544.1ms | 3714.9ms | 61.3MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 869.6ms | 943.0ms | 60.9MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 75.7ms |

## Observations

No data.

