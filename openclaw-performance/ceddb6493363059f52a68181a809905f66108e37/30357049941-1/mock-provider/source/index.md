# OpenClaw Source Performance

Generated: 2026-07-28T12:07:10.921Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 7290.4ms | 8121.8ms | 7285.6ms | 3677.0ms | 6725.5ms | 236.9ms | 1060.0MB | 1.372 |
| skipChannels | gateway, skip channels | 6625.5ms | 7129.0ms | 6625.4ms | 3357.1ms | 3409.8ms | 227.3ms | 1030.3MB | 1.262 |
| oneInternalHook | gateway, one configured internal hook | 7281.1ms | 7846.7ms | 7281.0ms | 4756.1ms | 4794.1ms | 245.1ms | 1150.3MB | 1.274 |
| allInternalHooks | gateway, all internal hooks | 7243.0ms | 7428.6ms | 7243.0ms | 4666.5ms | 4707.0ms | 245.2ms | 1141.1MB | 1.345 |
| fiftyPlugins | gateway, 50 manifest plugins | 8854.5ms | 8953.7ms | 8854.4ms | 4424.0ms | 4508.7ms | 229.9ms | 1239.1MB | 1.249 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 9357.2ms | 9612.7ms | 9357.3ms | 4465.4ms | 4575.1ms | 233.3ms | 1210.2MB | 1.282 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 537.2MB | 490.9MB | ok |
| voice-call | 532.6MB | 486.4MB | ok |
| opencode | 528.1MB | 481.9MB | ok |
| active-memory | 527.1MB | 480.9MB | ok |
| codex | 521.4MB | 475.2MB | ok |
| zoom-meetings | 514.2MB | 468.0MB | ok |
| anthropic | 511.6MB | 465.4MB | ok |
| llm-task | 508.5MB | 462.3MB | ok |
| acpx | 507.7MB | 461.5MB | ok |
| workboard | 507.6MB | 461.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 4432.7ms | 5380.7ms |
| default | post-ready.agent-runtime-plugins.total | 4392.8ms | 5350.3ms |
| default | post-attach.update-check.total | 4389.4ms | 5346.9ms |
| default | post-attach.update-sentinel.total | 4080.4ms | 5069.1ms |
| default | sidecars.restart-sentinel.total | 4079.1ms | 5068.0ms |
| skipChannels | sidecars.session-locks.total | 4477.2ms | 4795.8ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4473.4ms | 4713.9ms |
| skipChannels | post-attach.update-sentinel.total | 4187.9ms | 4396.2ms |
| skipChannels | sidecars.restart-sentinel.total | 4186.9ms | 4395.2ms |
| skipChannels | sidecars.ready.total | 4179.3ms | 4382.7ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3613.8ms | 3615.7ms |
| oneInternalHook | sidecars.session-locks.total | 3374.2ms | 3787.5ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3370.8ms | 3736.9ms |
| oneInternalHook | post-attach.update-sentinel.total | 3060.0ms | 3453.3ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3058.9ms | 3452.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3502.6ms | 3554.8ms |
| allInternalHooks | sidecars.session-locks.total | 3362.0ms | 3502.9ms |
| allInternalHooks | post-ready.maintenance.total | 3331.0ms | 3471.0ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3309.0ms | 3447.6ms |
| allInternalHooks | post-attach.update-sentinel.total | 2996.0ms | 3137.7ms |
| fiftyPlugins | sidecars.session-locks.total | 5198.0ms | 5239.9ms |
| fiftyPlugins | post-ready.maintenance.total | 5127.5ms | 5165.3ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 5059.3ms | 5097.5ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4902.9ms | 4938.3ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4901.7ms | 4937.4ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 5559.3ms | 5784.1ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 5480.2ms | 5694.3ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 5403.0ms | 5615.0ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 5246.9ms | 5411.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 5245.6ms | 5410.1ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 12602.0ms | 0.000 | 2696.5MB | 1073.5MB | -1622.9MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 11667.0ms | 0.171 | 1014.4MB | 1195.1MB | 180.7MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 11174.0ms | 0.179 | 1010.4MB | 1188.3MB | 177.8MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 4210.0ms | 4607.6ms | 187.2MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 946.0ms | 972.7ms | 187.0MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.1ms | 147.4ms |

## Observations

No data.

