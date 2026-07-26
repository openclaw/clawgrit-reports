# OpenClaw Source Performance

Generated: 2026-07-26T14:21:06.508Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6189.7ms | 6201.3ms | 6189.7ms | 3188.9ms | 6057.7ms | 43.6ms | 1062.9MB | 1.307 |
| skipChannels | gateway, skip channels | 6147.2ms | 6224.6ms | 6147.1ms | 3137.4ms | 3177.9ms | 41.8ms | 1019.4MB | 1.301 |
| oneInternalHook | gateway, one configured internal hook | 6700.3ms | 6852.3ms | 6700.2ms | 4523.3ms | 4565.8ms | 41.4ms | 1179.0MB | 1.313 |
| allInternalHooks | gateway, all internal hooks | 4590.5ms | 6725.4ms | 4589.9ms | 4502.2ms | 4544.2ms | 42.4ms | 1182.3MB | 1.315 |
| fiftyPlugins | gateway, 50 manifest plugins | 8294.5ms | 8408.7ms | 8294.4ms | 4366.4ms | 4448.6ms | 42.8ms | 1147.5MB | 1.221 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8193.8ms | 8281.3ms | 8193.7ms | 4129.7ms | 4223.1ms | 42.2ms | 1156.1MB | 1.226 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| opencode | 553.8MB | 507.3MB | ok |
| google-meet | 548.5MB | 502.0MB | ok |
| llm-task | 527.7MB | 481.2MB | ok |
| codex | 515.4MB | 468.9MB | ok |
| teams-meetings | 512.0MB | 465.5MB | ok |
| migrate-hermes | 511.9MB | 465.5MB | ok |
| active-memory | 510.0MB | 463.6MB | ok |
| voice-call | 510.0MB | 463.5MB | ok |
| workboard | 506.9MB | 460.5MB | ok |
| anthropic | 506.8MB | 460.4MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3916.3ms | 3942.2ms |
| default | post-ready.agent-runtime-plugins.total | 3893.0ms | 3915.5ms |
| default | post-attach.update-check.total | 3890.5ms | 3912.7ms |
| default | post-attach.update-sentinel.total | 3881.7ms | 3903.5ms |
| default | sidecars.restart-sentinel.total | 3880.8ms | 3902.6ms |
| skipChannels | sidecars.session-locks.total | 4003.6ms | 4040.1ms |
| skipChannels | post-ready.agent-runtime-plugins.total | 4001.9ms | 4038.3ms |
| skipChannels | post-attach.update-sentinel.total | 3997.7ms | 4034.1ms |
| skipChannels | sidecars.restart-sentinel.total | 3996.8ms | 4033.2ms |
| skipChannels | sidecars.ready.total | 3988.4ms | 4023.8ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3402.5ms | 3447.3ms |
| oneInternalHook | sidecars.session-locks.total | 2995.8ms | 3022.9ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 2994.1ms | 3021.2ms |
| oneInternalHook | post-attach.update-sentinel.total | 2989.8ms | 3016.8ms |
| oneInternalHook | sidecars.restart-sentinel.total | 2988.8ms | 3015.8ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3384.3ms | 3411.6ms |
| allInternalHooks | sidecars.session-locks.total | 2972.5ms | 2972.5ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 2970.8ms | 2970.8ms |
| allInternalHooks | post-attach.update-sentinel.total | 2966.4ms | 2966.4ms |
| allInternalHooks | sidecars.restart-sentinel.total | 2965.5ms | 2965.5ms |
| fiftyPlugins | sidecars.session-locks.total | 4832.2ms | 4900.3ms |
| fiftyPlugins | post-ready.maintenance.total | 4745.2ms | 4813.5ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4713.0ms | 4778.6ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4519.5ms | 4586.7ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4518.6ms | 4585.6ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4703.8ms | 4746.7ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4615.8ms | 4657.5ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4583.2ms | 4623.7ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4384.8ms | 4422.6ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4383.9ms | 4421.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 10784.0ms | 0.000 | 2549.6MB | 1109.9MB | -1439.6MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10436.0ms | 0.192 | 959.1MB | 987.5MB | 28.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10439.0ms | 0.096 | 878.2MB | 1045.9MB | 167.7MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3375.9ms | 3376.0ms | 61.7MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 867.0ms | 882.3ms | 61.9MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 134.8ms |

## Observations

No data.

