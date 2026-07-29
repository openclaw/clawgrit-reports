# OpenClaw Source Performance

Generated: 2026-07-29T04:25:24.731Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6158.0ms | 6434.6ms | 6157.9ms | 2972.3ms | 5711.3ms | 218.6ms | 1044.8MB | 1.315 |
| skipChannels | gateway, skip channels | 3061.1ms | 6164.5ms | 3059.5ms | 2995.7ms | 3003.8ms | 218.4ms | 1105.1MB | 1.354 |
| oneInternalHook | gateway, one configured internal hook | 4232.6ms | 4246.1ms | 4232.5ms | 4173.9ms | 4181.7ms | 204.2ms | 989.3MB | 1.418 |
| allInternalHooks | gateway, all internal hooks | 4308.4ms | 4320.8ms | 4307.0ms | 4245.1ms | 4254.7ms | 214.4ms | 995.4MB | 1.406 |
| fiftyPlugins | gateway, 50 manifest plugins | 8050.5ms | 8052.2ms | 8052.0ms | 4092.7ms | 4136.3ms | 213.9ms | 1224.8MB | 1.242 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 7999.1ms | 8321.8ms | 7999.1ms | 3937.5ms | 3988.5ms | 211.0ms | 1245.3MB | 1.251 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| opencode | 547.4MB | 500.9MB | ok |
| codex | 540.0MB | 493.5MB | ok |
| voice-call | 538.6MB | 492.1MB | ok |
| openai | 530.0MB | 483.6MB | ok |
| zoom-meetings | 525.4MB | 478.9MB | ok |
| migrate-hermes | 515.8MB | 469.4MB | ok |
| teams-meetings | 513.2MB | 466.8MB | ok |
| acpx | 511.5MB | 465.0MB | ok |
| memory-lancedb | 511.4MB | 464.9MB | ok |
| anthropic | 510.2MB | 463.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4039.9ms | 4174.0ms |
| default | post-ready.agent-runtime-plugins.total | 4011.3ms | 4141.1ms |
| default | post-attach.update-check.total | 4008.0ms | 4137.1ms |
| default | post-attach.update-sentinel.total | 3736.9ms | 3832.7ms |
| default | sidecars.restart-sentinel.total | 3735.8ms | 3831.7ms |
| skipChannels | sidecars.session-locks.total | 4116.8ms | 4116.8ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4112.8ms | 4112.8ms |
| skipChannels | post-attach.update-sentinel.total | 3835.0ms | 3835.0ms |
| skipChannels | sidecars.restart-sentinel.total | 3833.8ms | 3833.8ms |
| skipChannels | sidecars.ready.total | 3818.4ms | 3818.4ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3084.9ms | 3115.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2530.9ms | 2579.5ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2510.8ms | 2559.4ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2509.8ms | 2558.3ms |
| oneInternalHook | sidecars.internal-hooks.total | 915.0ms | 942.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3148.8ms | 3159.4ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2595.5ms | 2607.0ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2578.2ms | 2589.5ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2577.3ms | 2588.6ms |
| allInternalHooks | sidecars.internal-hooks.total | 930.1ms | 946.3ms |
| fiftyPlugins | sidecars.session-locks.total | 4693.4ms | 4700.6ms |
| fiftyPlugins | post-ready.maintenance.total | 4593.9ms | 4630.4ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4570.4ms | 4697.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4422.2ms | 4553.9ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4421.3ms | 4553.0ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4620.8ms | 4771.3ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4555.1ms | 4709.2ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4498.3ms | 4649.5ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4354.3ms | 4501.8ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4353.4ms | 4501.0ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10716.0ms | 0.000 | 2703.8MB | 1216.2MB | -1487.7MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10276.0ms | 0.097 | 1049.7MB | 1080.1MB | 30.4MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10274.0ms | 0.097 | 1012.7MB | 1202.0MB | 189.3MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 637.8ms | 639.0ms | 187.1MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 844.9ms | 881.2ms | 187.0MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 132.2ms |

## Observations

No data.

