# OpenClaw Source Performance

Generated: 2026-07-26T12:40:06.685Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6126.1ms | 6183.2ms | 6126.0ms | 3159.0ms | 6022.8ms | 44.6ms | 1061.7MB | 1.306 |
| skipChannels | gateway, skip channels | 6162.0ms | 6169.1ms | 6161.9ms | 3158.3ms | 3204.4ms | 42.7ms | 1027.7MB | 1.299 |
| oneInternalHook | gateway, one configured internal hook | 4568.4ms | 4575.4ms | 4567.8ms | 4483.4ms | 4525.0ms | 40.8ms | 1020.9MB | 1.325 |
| allInternalHooks | gateway, all internal hooks | 4566.4ms | 6818.1ms | 4566.0ms | 4481.7ms | 4522.8ms | 38.4ms | 1170.1MB | 1.332 |
| fiftyPlugins | gateway, 50 manifest plugins | 8333.4ms | 8397.8ms | 8333.3ms | 4398.9ms | 4477.6ms | 41.3ms | 1180.1MB | 1.202 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8188.5ms | 8209.0ms | 8188.3ms | 4120.5ms | 4203.1ms | 41.1ms | 1124.2MB | 1.225 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| zoom-meetings | 578.5MB | 532.0MB | ok |
| opencode | 549.9MB | 503.5MB | ok |
| active-memory | 532.8MB | 486.4MB | ok |
| llm-task | 514.0MB | 467.5MB | ok |
| codex | 514.0MB | 467.5MB | ok |
| voice-call | 511.0MB | 464.5MB | ok |
| migrate-hermes | 510.7MB | 464.2MB | ok |
| workboard | 510.1MB | 463.6MB | ok |
| anthropic | 509.3MB | 462.8MB | ok |
| memory-lancedb | 507.3MB | 460.8MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3818.0ms | 3897.3ms |
| default | post-ready.agent-runtime-plugins.total | 3794.5ms | 3872.4ms |
| default | post-attach.update-check.total | 3792.0ms | 3869.7ms |
| default | post-attach.update-sentinel.total | 3783.7ms | 3860.5ms |
| default | sidecars.restart-sentinel.total | 3782.7ms | 3859.5ms |
| skipChannels | sidecars.session-locks.total | 3962.2ms | 3979.4ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 3960.5ms | 3977.5ms |
| skipChannels | post-attach.update-sentinel.total | 3956.3ms | 3973.1ms |
| skipChannels | sidecars.restart-sentinel.total | 3955.4ms | 3972.2ms |
| skipChannels | sidecars.ready.total | 3948.1ms | 3964.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3370.1ms | 3370.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2629.6ms | 2646.9ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2608.5ms | 2617.0ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2607.5ms | 2616.2ms |
| oneInternalHook | sidecars.internal-hooks.total | 929.2ms | 932.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3332.7ms | 3438.5ms |
| allInternalHooks | sidecars.session-locks.total | 3027.7ms | 3027.7ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3025.9ms | 3025.9ms |
| allInternalHooks | post-attach.update-sentinel.total | 3021.5ms | 3021.5ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3020.6ms | 3020.6ms |
| fiftyPlugins | sidecars.session-locks.total | 4836.8ms | 4852.9ms |
| fiftyPlugins | post-ready.maintenance.total | 4750.4ms | 4766.3ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4718.5ms | 4734.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4527.6ms | 4544.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4526.8ms | 4543.5ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4709.0ms | 4727.0ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4622.5ms | 4634.1ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4587.2ms | 4599.8ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4390.3ms | 4392.5ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4389.4ms | 4391.6ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10799.0ms | 0.000 | 2517.2MB | 1070.9MB | -1446.3MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10706.0ms | 0.093 | 969.4MB | 1000.4MB | 31.0MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10342.0ms | 0.097 | 870.6MB | 1038.4MB | 167.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3370.2ms | 3399.7ms | 61.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 861.7ms | 894.0ms | 61.8MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 127.5ms |

## Observations

No data.

