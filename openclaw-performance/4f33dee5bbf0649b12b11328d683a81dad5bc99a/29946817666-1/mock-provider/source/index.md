# OpenClaw Source Performance

Generated: 2026-07-22T18:36:28.054Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6728.7ms | 7233.7ms | 6732.7ms | 3392.5ms | 6607.5ms | 54.9ms | 911.2MB | 1.337 |
| skipChannels | gateway, skip channels | 6444.0ms | 6476.3ms | 6443.5ms | 3054.0ms | 3107.4ms | 44.3ms | 898.4MB | 1.288 |
| oneInternalHook | gateway, one configured internal hook | 7966.4ms | 8048.9ms | 7958.5ms | 5029.0ms | 5106.3ms | 51.3ms | 954.5MB | 1.294 |
| allInternalHooks | gateway, all internal hooks | 7492.5ms | 9038.9ms | 7492.4ms | 4914.5ms | 4961.2ms | 51.6ms | 954.0MB | 1.400 |
| fiftyPlugins | gateway, 50 manifest plugins | 8727.8ms | 9347.4ms | 8727.8ms | 4999.1ms | 5087.3ms | 49.2ms | 1152.5MB | 1.289 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 9362.1ms | 11446.6ms | 9361.8ms | 4944.2ms | 5046.5ms | 57.8ms | 1155.5MB | 1.310 |

## Memory Trend

Compared with the latest published mock-provider source probe for this tested ref.

| surface | case | baseline RSS p95 | current RSS p95 | RSS delta | heap delta | state |
| --- | --- | --- | --- | --- | --- | --- |
| gateway boot | default | 907.6MB | 911.2MB | +3.6MB (+0.4%) | -1.0MB (-0.2%) | stable |
| gateway boot | skipChannels | 850.3MB | 898.4MB | +48.1MB (+5.7%) | +231.3MB (+72.8%) | stable |
| gateway boot | oneInternalHook | 957.3MB | 954.5MB | -2.8MB (-0.3%) | -19.1MB (-6.3%) | stable |
| gateway boot | allInternalHooks | 950.6MB | 954.0MB | +3.4MB (+0.4%) | -269.2MB (-42.3%) | stable |
| gateway boot | fiftyPlugins | 1115.7MB | 1152.5MB | +36.8MB (+3.3%) | +5.5MB (+0.9%) | stable |
| gateway boot | fiftyStartupLazyPlugins | 1132.1MB | 1155.5MB | +23.3MB (+2.1%) | -79.3MB (-12.2%) | stable |
| cli | gatewayHealthJson | 61.0MB | 60.1MB | -0.8MB (-1.3%) | n/a | stable |
| cli | configGetGatewayPort | 60.2MB | 60.4MB | +0.2MB (+0.4%) | n/a | stable |
| mock hello | gateway RSS delta avg | -385.8MB | -385.9MB | -0.1MB (+0.0%) | n/a | stable |

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 514.7MB | 468.5MB | ok |
| active-memory | 511.1MB | 464.9MB | ok |
| workboard | 510.9MB | 464.7MB | ok |
| teams-meetings | 510.7MB | 464.6MB | ok |
| anthropic | 509.1MB | 462.9MB | ok |
| codex | 508.7MB | 462.5MB | ok |
| memory-lancedb | 505.9MB | 459.7MB | ok |
| llm-task | 505.2MB | 459.0MB | ok |
| voice-call | 504.0MB | 457.8MB | ok |
| google-meet | 503.9MB | 457.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4279.4ms | 4621.1ms |
| default | post-ready.agent-runtime-plugins.total | 4257.0ms | 4595.7ms |
| default | post-attach.update-check.total | 4253.5ms | 4591.6ms |
| default | post-attach.update-sentinel.total | 4243.7ms | 4579.8ms |
| default | sidecars.restart-sentinel.total | 4242.5ms | 4577.9ms |
| skipChannels | sidecars.session-locks.total | 4223.4ms | 4231.8ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4220.3ms | 4229.3ms |
| skipChannels | post-attach.update-sentinel.total | 4211.8ms | 4223.4ms |
| skipChannels | sidecars.restart-sentinel.total | 4210.5ms | 4222.1ms |
| skipChannels | sidecars.ready.total | 4190.6ms | 4202.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3801.9ms | 3870.5ms |
| oneInternalHook | sidecars.session-locks.total | 3770.1ms | 3802.0ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3766.7ms | 3796.4ms |
| oneInternalHook | post-attach.update-sentinel.total | 3752.6ms | 3775.5ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3750.8ms | 3773.5ms |
| allInternalHooks | sidecars.session-locks.total | 4018.9ms | 4677.3ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 4015.0ms | 4672.8ms |
| allInternalHooks | post-attach.update-sentinel.total | 3997.4ms | 4655.3ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3995.2ms | 4652.8ms |
| allInternalHooks | sidecars.ready.total | 3963.0ms | 4614.4ms |
| fiftyPlugins | sidecars.session-locks.total | 4774.1ms | 5123.2ms |
| fiftyPlugins | post-ready.maintenance.total | 4654.4ms | 5014.7ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4633.2ms | 4996.1ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4231.1ms | 4409.6ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4229.7ms | 4408.1ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5192.2ms | 6672.0ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5087.8ms | 6510.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5070.9ms | 6472.6ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4532.6ms | 5473.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4530.8ms | 5471.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11937.0ms | 0.000 | 2354.6MB | 1039.5MB | -1315.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10612.0ms | 0.188 | 854.5MB | 934.3MB | 79.9MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10421.0ms | 0.192 | 855.5MB | 933.0MB | 77.5MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 5255.7ms | 8083.5ms | 60.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 1808.5ms | 1811.7ms | 60.4MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.1MB | 0.0MB | 0.1ms | 169.1ms |

## Observations

No data.

