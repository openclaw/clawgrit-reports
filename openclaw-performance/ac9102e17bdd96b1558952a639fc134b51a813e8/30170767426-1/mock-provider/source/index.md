# OpenClaw Source Performance

Generated: 2026-07-25T19:06:52.711Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 6120.3ms | 6212.6ms | 6120.2ms | 3193.8ms | 6039.3ms | 42.2ms | 1060.9MB | 1.313 |
| skipChannels | gateway, skip channels | 3186.9ms | 3208.2ms | 3186.5ms | 3114.8ms | 3155.5ms | 41.3ms | 814.9MB | 1.257 |
| oneInternalHook | gateway, one configured internal hook | 4615.1ms | 4615.9ms | 4614.9ms | 4544.6ms | 4585.9ms | 40.9ms | 996.7MB | 1.303 |
| allInternalHooks | gateway, all internal hooks | 4616.5ms | 4636.5ms | 4616.5ms | 4540.6ms | 4582.6ms | 40.4ms | 953.9MB | 1.308 |
| fiftyPlugins | gateway, 50 manifest plugins | 8415.2ms | 8490.3ms | 8415.2ms | 4450.6ms | 4526.9ms | 41.9ms | 1144.0MB | 1.190 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8285.8ms | 8341.6ms | 8285.8ms | 4112.5ms | 4199.8ms | 41.7ms | 1114.2MB | 1.212 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| opencode | 555.5MB | 509.0MB | ok |
| llm-task | 544.3MB | 497.8MB | ok |
| active-memory | 540.1MB | 493.6MB | ok |
| codex | 519.5MB | 473.0MB | ok |
| migrate-hermes | 513.1MB | 466.7MB | ok |
| voice-call | 509.9MB | 463.5MB | ok |
| anthropic | 508.2MB | 461.7MB | ok |
| google-meet | 508.1MB | 461.6MB | ok |
| workboard | 507.0MB | 460.5MB | ok |
| zoom-meetings | 506.4MB | 459.9MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3897.9ms | 3954.2ms |
| default | post-ready.agent-runtime-plugins.total | 3885.9ms | 3935.5ms |
| default | post-attach.update-check.total | 3883.2ms | 3932.8ms |
| default | post-attach.update-sentinel.total | 3875.1ms | 3924.8ms |
| default | sidecars.restart-sentinel.total | 3873.9ms | 3923.8ms |
| skipChannels | sidecars.internal-hooks.total | 1061.6ms | 1066.0ms |
| skipChannels | post-attach.update-check.total | 996.6ms | 1001.3ms |
| skipChannels | ready.total | 982.4ms | 987.1ms |
| skipChannels | runtime.post-attach.total | 980.8ms | 985.6ms |
| skipChannels | post-attach.log.total | 979.8ms | 984.5ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3426.2ms | 3434.2ms |
| oneInternalHook | cli.main.gateway-run-bootstrap | 2697.4ms | 2718.7ms |
| oneInternalHook | cli.bootstrap.plugin-plan.total | 2675.5ms | 2700.0ms |
| oneInternalHook | cli.bootstrap.plugin-plan-import.total | 2674.6ms | 2699.1ms |
| oneInternalHook | sidecars.internal-hooks.total | 956.3ms | 980.1ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3398.9ms | 3444.2ms |
| allInternalHooks | cli.main.gateway-run-bootstrap | 2676.3ms | 2729.1ms |
| allInternalHooks | cli.bootstrap.plugin-plan.total | 2651.4ms | 2705.1ms |
| allInternalHooks | cli.bootstrap.plugin-plan-import.total | 2650.5ms | 2704.2ms |
| allInternalHooks | sidecars.internal-hooks.total | 958.7ms | 970.5ms |
| fiftyPlugins | sidecars.session-locks.total | 4918.3ms | 5035.1ms |
| fiftyPlugins | post-ready.maintenance.total | 4824.4ms | 4940.2ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4787.9ms | 4901.5ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4598.9ms | 4704.2ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4597.8ms | 4703.2ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4791.7ms | 4863.1ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4696.2ms | 4767.1ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4660.4ms | 4731.2ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4455.2ms | 4525.3ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4454.2ms | 4524.4ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 11282.0ms | 0.089 | 942.1MB | 987.3MB | 45.2MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 10325.0ms | 0.097 | 896.6MB | 1002.9MB | 106.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 10677.0ms | 0.094 | 869.4MB | 1024.8MB | 155.4MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3386.5ms | 3408.6ms | 61.8MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 804.0ms | 820.0ms | 61.6MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 127.2ms |

## Observations

No data.

