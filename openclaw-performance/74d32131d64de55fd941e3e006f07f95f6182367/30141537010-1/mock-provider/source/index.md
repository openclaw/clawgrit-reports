# OpenClaw Source Performance

Generated: 2026-07-25T03:08:54.000Z

## Gateway Boot

| case | name | readyz p50 | readyz p95 | healthz p50 | http listen p50 | gateway ready p50 | first output p50 | RSS p95 | CPU core p95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default | gateway default | 5983.9ms | 5993.4ms | 5993.3ms | 3010.7ms | 5888.3ms | 40.4ms | 1010.1MB | 1.183 |
| skipChannels | gateway, skip channels | 3091.7ms | 3121.5ms | 3091.4ms | 3020.0ms | 3062.3ms | 38.8ms | 907.3MB | 1.308 |
| oneInternalHook | gateway, one configured internal hook | 6607.6ms | 6763.3ms | 6607.6ms | 4366.7ms | 4411.0ms | 42.5ms | 996.9MB | 1.342 |
| allInternalHooks | gateway, all internal hooks | 6667.4ms | 6765.1ms | 6667.4ms | 4365.0ms | 4412.2ms | 43.7ms | 978.8MB | 1.362 |
| fiftyPlugins | gateway, 50 manifest plugins | 8326.1ms | 8379.0ms | 8326.0ms | 4261.4ms | 4338.2ms | 42.4ms | 1142.7MB | 1.206 |
| fiftyStartupLazyPlugins | gateway, 50 startup-lazy manifest plugins | 8067.3ms | 8115.5ms | 8067.2ms | 3949.3ms | 4034.7ms | 42.8ms | 1175.3MB | 1.257 |

## Memory Trend

No published source baseline was available for this tested ref.

No data.

## Bundled Plugin Import Memory

| plugin | max RSS | delta from empty process | status |
| --- | --- | --- | --- |
| google-meet | 525.8MB | 479.4MB | ok |
| codex | 517.5MB | 471.0MB | ok |
| memory-lancedb | 514.0MB | 467.5MB | ok |
| zoom-meetings | 512.6MB | 466.1MB | ok |
| llm-task | 512.1MB | 465.7MB | ok |
| active-memory | 511.0MB | 464.5MB | ok |
| workboard | 510.5MB | 464.0MB | ok |
| voice-call | 508.8MB | 462.4MB | ok |
| migrate-hermes | 503.4MB | 457.0MB | ok |
| anthropic | 503.2MB | 456.7MB | ok |

## Startup Hotspots

| case | phase | p50 | p95 |
| --- | --- | --- | --- |
| default | sidecars.session-locks.total | 3808.6ms | 3826.2ms |
| default | post-ready.agent-runtime-plugins.total | 3799.2ms | 3804.8ms |
| default | post-attach.update-check.total | 3796.7ms | 3802.0ms |
| default | post-attach.update-sentinel.total | 3788.7ms | 3793.1ms |
| default | sidecars.restart-sentinel.total | 3787.6ms | 3791.9ms |
| skipChannels | sidecars.internal-hooks.total | 964.0ms | 979.1ms |
| skipChannels | post-attach.update-check.total | 894.3ms | 913.3ms |
| skipChannels | ready.total | 881.6ms | 896.0ms |
| skipChannels | runtime.post-attach.total | 880.0ms | 894.3ms |
| skipChannels | post-attach.log.total | 879.0ms | 893.1ms |
| oneInternalHook | cli.main.gateway-run-bootstrap.total | 3294.0ms | 3336.4ms |
| oneInternalHook | sidecars.session-locks.total | 3065.9ms | 3134.0ms |
| oneInternalHook | post-ready.agent-runtime-plugins.total | 3064.3ms | 3132.3ms |
| oneInternalHook | post-attach.update-sentinel.total | 3059.8ms | 3127.7ms |
| oneInternalHook | sidecars.restart-sentinel.total | 3058.7ms | 3126.5ms |
| allInternalHooks | cli.main.gateway-run-bootstrap.total | 3312.3ms | 3385.9ms |
| allInternalHooks | sidecars.session-locks.total | 3037.7ms | 3041.3ms |
| allInternalHooks | post-ready.agent-runtime-plugins.total | 3036.1ms | 3039.6ms |
| allInternalHooks | post-attach.update-sentinel.total | 3031.5ms | 3035.0ms |
| allInternalHooks | sidecars.restart-sentinel.total | 3030.4ms | 3033.9ms |
| fiftyPlugins | sidecars.session-locks.total | 4881.4ms | 4939.2ms |
| fiftyPlugins | post-ready.maintenance.total | 4790.0ms | 4845.5ms |
| fiftyPlugins | post-ready.agent-runtime-plugins.total | 4751.3ms | 4809.2ms |
| fiftyPlugins | post-attach.update-sentinel.total | 4550.7ms | 4605.4ms |
| fiftyPlugins | sidecars.restart-sentinel.total | 4549.7ms | 4604.4ms |
| fiftyStartupLazyPlugins | sidecars.session-locks.total | 4660.5ms | 4674.1ms |
| fiftyStartupLazyPlugins | post-ready.maintenance.total | 4568.9ms | 4584.4ms |
| fiftyStartupLazyPlugins | post-ready.agent-runtime-plugins.total | 4530.6ms | 4547.9ms |
| fiftyStartupLazyPlugins | post-attach.update-sentinel.total | 4328.3ms | 4345.7ms |
| fiftyStartupLazyPlugins | sidecars.restart-sentinel.total | 4327.3ms | 4344.7ms |

## Fake Model Hello Loops

| run | status | pass | wall | gateway CPU core | RSS start | RSS end | RSS delta | model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| run-001 | pass | 1/1 | 9923.0ms | 0.000 | 2451.9MB | 1101.8MB | -1350.1MB | mock-openai/gpt-5.6-luna |
| run-002 | pass | 1/1 | 9645.0ms | 0.207 | 862.7MB | 1118.0MB | 255.3MB | mock-openai/gpt-5.6-luna |
| run-003 | pass | 1/1 | 9731.0ms | 0.206 | 851.6MB | 1102.2MB | 250.6MB | mock-openai/gpt-5.6-luna |

## CLI Against Booted Gateway

| case | command | duration p50 | duration p95 | RSS p95 | exits |
| --- | --- | --- | --- | --- | --- |
| gatewayHealthJson | gateway health --json | 3355.5ms | 3404.3ms | 61.5MB | code:0 x3 |
| configGetGatewayPort | config get gateway.port | 785.6ms | 797.8ms | 61.3MB | code:0 x3 |

## SQLite State Smoke

| profile | state rows | agent rows | integrity | WAL before | WAL after | query p95 max | total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| smoke | 4100 | 1000 | ok | 3.2MB | 0.0MB | 0.0ms | 101.4ms |

## Observations

No data.

