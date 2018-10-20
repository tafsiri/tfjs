"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("../index");
var jasmine_util_1 = require("../jasmine_util");
var test_util_1 = require("../test_util");
jasmine_util_1.describeWithFlags('FFT', test_util_1.ALL_ENVS, function () {
    it('should return the same value with TensorFlow (2 elements)', function () {
        var t1Real = tf.tensor1d([1, 2]);
        var t1Imag = tf.tensor1d([1, 1]);
        var t1 = tf.complex(t1Real, t1Imag);
        test_util_1.expectArraysClose(tf.spectral.fft(t1), [3, 2, -1, 0]);
    });
    it('should calculate FFT from Tensor directly', function () {
        var t1Real = tf.tensor1d([1, 2]);
        var t1Imag = tf.tensor1d([1, 1]);
        var t1 = tf.complex(t1Real, t1Imag);
        test_util_1.expectArraysClose(t1.fft(), [3, 2, -1, 0]);
    });
    it('should return the same value as TensorFlow (3 elements)', function () {
        var t1Real = tf.tensor1d([1, 2, 3]);
        var t1Imag = tf.tensor1d([0, 0, 0]);
        var t1 = tf.complex(t1Real, t1Imag);
        test_util_1.expectArraysClose(tf.spectral.fft(t1), [6, 0, -1.5, 0.866025, -1.5, -0.866025]);
    });
    it('should return the same value as TensorFlow with imaginary (3 elements)', function () {
        var t1Real = tf.tensor1d([1, 2, 3]);
        var t1Imag = tf.tensor1d([1, 2, 3]);
        var t1 = tf.complex(t1Real, t1Imag);
        test_util_1.expectArraysClose(tf.spectral.fft(t1), [6, 6, -2.3660252, -0.63397473, -0.6339747, -2.3660254]);
    });
    it('should return the same value as TensorFlow (negative 3 elements)', function () {
        var t1Real = tf.tensor1d([-1, -2, -3]);
        var t1Imag = tf.tensor1d([-1, -2, -3]);
        var t1 = tf.complex(t1Real, t1Imag);
        test_util_1.expectArraysClose(tf.spectral.fft(t1), [-5.9999995, -6, 2.3660252, 0.63397473, 0.6339747, 2.3660254]);
    });
    it('should return the same value with TensorFlow (4 elements)', function () {
        var t1Real = tf.tensor1d([1, 2, 3, 4]);
        var t1Imag = tf.tensor1d([0, 0, 0, 0]);
        var t1 = tf.complex(t1Real, t1Imag);
        test_util_1.expectArraysClose(tf.spectral.fft(t1), [10, 0, -2, 2, -2, 0, -2, -2]);
    });
    it('should return the same value as TensorFlow with imaginary (4 elements)', function () {
        var t1Real = tf.tensor1d([1, 2, 3, 4]);
        var t1Imag = tf.tensor1d([1, 2, 3, 4]);
        var t1 = tf.complex(t1Real, t1Imag);
        test_util_1.expectArraysClose(tf.spectral.fft(t1), [10, 10, -4, 0, -2, -2, 0, -4]);
    });
});
//# sourceMappingURL=spectral_ops_test.js.map