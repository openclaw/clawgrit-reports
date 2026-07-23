# OpenClaw Source Performance

Generated: 2026-07-23T07:49:25.748Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5879.8ms | 5910.5ms | 5879.7ms | 2885.8ms | 5785.8ms | 40.9ms | 898.4MB | 1.219 |
| skipChannels | gateway, skip channels | 2904.6ms | 2913.2ms | 2904.2ms | 2826.4ms | 2869.7ms | 41.9ms | 864.4MB | 1.379 |
| oneInternalHook | gateway, one configured internal hook | 6298.9ms | 6467.1ms | 4366.5ms | 4262.3ms | 4321.3ms | 41.8ms | 959.2MB | 1.374 |
| allInternalHooks | gateway, all internal hooks | 6498.3ms | 6652.2ms | 6498.3ms | 4403.1ms | 4447.4ms | 43.0ms | 957.6MB | 1.338 |
| fiftyPlugins | gateway, 50 manifest plugins | 8312.4ms | 8539.9ms | 8312.4ms | 4154.8ms | 4232.4ms | 38.3ms | 1124.6MB | 1.221 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8514.0ms | 8692.6ms | 8514.0ms | 4108.0ms | 4197.5ms | 41.6ms | 1133.2MB | 1.292 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| active-memory | 531.3MB | 484.7MB | ok |
| zoom-meetings | 514.0MB | 467.4MB | ok |
| google-meet | 513.4MB | 466.8MB | ok |
| llm-task | 509.1MB | 462.5MB | ok |
| teams-meetings | 507.2MB | 460.6MB | ok |
| anthropic | 506.6MB | 460.0MB | ok |
| xai | 506.1MB | 459.5MB | ok |
| workboard | 506.0MB | 459.4MB | ok |
| migrate-hermes | 505.7MB | 459.1MB | ok |
| codex | 505.2MB | 458.6MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3690.2ms | 3731.7ms |
| default | post-ready.agent-runtime-plugins.total | 3668.1ms | 3713.2ms |
| default | post-attach.update-check.total | 3665.6ms | 3710.7ms |
| default | post-attach.update-sentinel.total | 3657.6ms | 3702.6ms |
| default | sidecars.restart-sentinel.total | 3656.7ms | 3701.6ms |
| skipChannels | sidecars.internal-hooks.total | 860.0ms | 868.3ms |
| skipChannels | cli.main.gateway-run-bootstrap.total | 823.2ms | 852.2ms |
| skipChannels | post-attach.update-check.total | 792.7ms | 805.3ms |
| skipChannels | ready.total | 779.7ms | 789.5ms |
| skipChannels | runtime.post-attach.total | 778.3ms | 788.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3323.4ms | 3338.4ms |
| oneInternalHook | sidecars.session-locks.total | 2777.9ms | 2822.0ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 2775.8ms | 2819.8ms |
| oneInternalHook | post-attach.update-sentinel.total | 2766.8ms | 2810.4ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2765.9ms | 2809.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3345.0ms | 3479.9ms |
| allInternalHooks | sidecars.session-locks.total | 2838.8ms | 2848.6ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2836.7ms | 2846.6ms |
| allInternalHooks | post-attach.update-sentinel.total | 2828.0ms | 2838.1ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2827.1ms | 2837.2ms |
| fiftyPlugins | sidecars.session-locks.total | 4930.7ms | 5154.6ms |
| fiftyPlugins | post-ready.maintenance.total | 4837.4ms | 5062.5ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4798.6ms | 5026.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4599.0ms | 4827.1ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4598.0ms | 4826.1ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4977.9ms | 5094.4ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4878.7ms | 4999.8ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4839.3ms | 4962.5ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4613.6ms | 4745.4ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4612.4ms | 4744.3ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10556.0ms | 0.000 | 2444.4MB | 964.0MB | -1480.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9565.0ms | 0.209 | 822.1MB | 1013.6MB | 191.5MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10007.0ms | 0.200 | 811.8MB | 1012.6MB | 200.9MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3315.6ms | 3361.4ms | 60.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 749.7ms | 793.1ms | 60.2MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.0ms | 64.2ms |

## Observations

No data.

