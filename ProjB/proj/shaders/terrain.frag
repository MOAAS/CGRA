#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

varying float vHeight;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);
	
	vec4 grad = texture2D(uSampler3, vec2(0.5, 1.0 - vHeight / 10.0));
	
	gl_FragColor = color * 0.66 + grad * 0.33;
}